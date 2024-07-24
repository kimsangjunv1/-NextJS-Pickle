import React, { Fragment, useEffect, useState, useRef } from "react";

import { menuListAdmin } from "@/components/utils/menulist";

import SubPageLayout from "@/components/layout/SubPageLayout";
import TitleComponents from "@/components/common/TitleComponents";
import util from "@/api/util";
import MainApi from "@/api/main/main_api";

const pageAdmin = () => {
    const apiMain = new MainApi;

    const [ title, setTitle ] = useState("");
    const [ desc, setDesc ] = useState("");
    const [ keywords, setKeywords ] = useState([]);

    const [ keywordsValue, setKeywordsValue ] = useState([]);
    const [ checkboxValue, setCheckboxValue ] = useState([]);
    
    const [ Playlist, setPlaylist ] = useState([]);
    const [ listDB, setListDB ] = useState([]);

    // 함수 : 정보 저장
    const handleValue = async(props, type) => {
        console.log("실행",props, type)
        switch (type) {
            // 사전 저장 : 리스트
            case "lists":
                console.log("리스트 저장 실행")
                // let test = { songId: props._id, albumImage: props.share.image }
                let test = { songId: props._id, albumImage: props.share.image, adamid: props.artists[0].adamid }
                setCheckboxValue([...checkboxValue, test]);
                
                break;

            // 사전 저장 : 키워드
            case "keywords":
                console.log("키워드 저장 실행", props.current.value)
                let value = props.current.value;
                setKeywords([...keywords, value]);
                props.current.value = "";

                break;
            
            // 최종 저장 : 모든 정보
            case "playlist":
                let info = {
                    title : title,
                    desc : desc,
                    keywords : keywords,
                    list : checkboxValue
                }
        
                console.log("전송 전 : ", info)
                const data = await apiMain.createPlayList(info);
                console.log("저장상태 : ",data)

                break;
        }
    }
    
    // 함수 : DB에서 음악 및 플레이리스트 정보 가져옴
    const getList = async() => {
        setListDB(await apiMain.getSongList());
        setPlaylist(await apiMain.getPlayList());
    }

    const deleteSomething = (e) => {
        setKeywords(util.filterObject({ value: keywords , target2: e }));
    }

    useEffect(() => {
        getList();
    }, [])

    return (
        <SubPageLayout pageTitle={"음악관리"} pagePath={"admin"} menuList={menuListAdmin}>
            <SectionRegisterComponents
                setTitle={(e) => setTitle(e)}
                setDesc={(e) => setDesc(e)}
                saveKeyword={(e,i) => handleValue(e,i)}
                confirm={(e) => handleValue(e, "playlist")}

                setDelete={(e) => deleteSomething(e)}

                title={ title }
                desc={ desc }
                keywords={ keywords }
            />

            <SectionSearchComponents 
                list={listDB}
                saveList={(e,i) => handleValue(e,i)}
            />

            <SectionDBComponents 
                list={Playlist}
            />
        </SubPageLayout>
    )
}


// 섹션 : 등록
const SectionRegisterComponents = ({
        setTitle, setDesc, setKeywords, saveKeyword, confirm,
        title, desc, keywords = [], setDelete
    }) => {

    const keywordRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);

    useEffect(() => {
        console.log("keywords",keywords)
    }, [])

    return (
        <article id="register">
            <div className="container-inner">
                {/* 등록 섹션 */}
                <div className="section-input">
                    <section className="title">
                        <TitleComponents title={"제목"} />
                        <input type="text" onChange={(e) => setTitle(e.target.value)} ref={titleRef}/>
                    </section>
                    <section className="description">
                        <TitleComponents title={"설명"} />
                        <input type="text" onChange={(e) => setDesc(e.target.value)} ref={descRef}/>
                    </section>
                    <section className="keyword">
                        <TitleComponents title={"키워드"} />
                        {/* <input type="text" onChange={(e) => setKeywords(e.target.value)} ref={keywordRef}/> */}
                        <input type="text" ref={keywordRef}/>
                        <button type="button" onClick={() => saveKeyword(keywordRef, "keywords")}>삽입</button>
                    </section>
                    <button onClick={() => confirm()}>저장</button>
                </div>
                {/* 등록 섹션 END */}

                {/* 미리보기 섹션 */}
                <div className="section-preview">
                    <h5>미리보기</h5>
                    <p>제목 : {title}</p>
                    <p>제목 : {desc}</p>
                    <p>키워드</p>
                    <div>
                        {keywords.map((e, i) =>
                            <div className="item">
                                <span>{e}</span>
                                <button type="button" onClick={() => setDelete(e)}>
                                    <img src="/images/icon/ico-common-close.svg" alt="지우기" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                {/* 미리보기 섹션 END */}
            </div>
        </article>
    )
}

// 섹션 : DB 속 노래 목록
const SectionSearchComponents = ({ list, saveList }) => {
    return(
        <article id="songList">
            <TitleComponents title={`총 ${list.length}건이 검색되었어요`} />

            <div className="list">
                {list.map((e, i) =>
                    <ItemDBComponents data={e} iconType={"rise"} index={i} saveList={(e, i) => saveList(e, i)}/>
                )}
            </div>
        </article>
    )
}

// 섹션 : DB 속 플레이리스트 목록
const SectionDBComponents = ({ list }) => {
    return (
        <article id="playList">
            <TitleComponents title={`총 ${list.length}건이 검색되었어요`} />
            <div className="list">
                {list.map((e, i) =>
                    <ItemPlaylistComponents data={e} iconType={"rise"} index={i}/>
                )}
            </div>
        </article>
    )
}

const ItemDBComponents = ({ data, iconType, index, thumbnail, saveList }) => {
    
    return (
        <Fragment>
            <input type="checkbox" id={index} className="item" />
            <label htmlFor={index} onClick={() => saveList(data, "lists")}>
                {/* {thumbnail.map((e, i) => 
                    <img src={e} alt={`${i}번째 앨범 이미지`} />
                )} */}
                <div className="info">
                    <div className="info">
                        <h5>{data.title}</h5>
                        <p>{data.subtitle}</p>
                    </div>
                    <div className="action">
                        <img src={`/images/icon/ico-common-${iconType}.svg`} alt={`${iconType}`} />
                    </div>
                </div>
            </label>
        </Fragment>
    )
}

const ItemPlaylistComponents = ({ data, iconType, index }) => {
    return (
        <Fragment>
            <input type="checkbox" id={index} className="item" />
            <label htmlFor={index} onClick={() => saveList(data, "lists")}>
                <div className="info">
                    <div className="info">
                        <h5>{data.title}</h5>
                        <p>{data.desc}</p>
                        <div className="keywords">
                            {data.keywords.map((e, i) => 
                                <span key={i}>{e}</span>
                            )}
                        </div>
                    </div>
                    <div className="action">
                        <img src={`/images/icon/ico-common-${iconType}.svg`} alt={`${iconType}`} />
                    </div>
                </div>
            </label>
        </Fragment>
    )
}

export default pageAdmin