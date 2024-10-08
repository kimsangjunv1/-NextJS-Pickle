import React, { Fragment, useEffect, useState, useRef } from "react";

import { menuListAdmin } from "@/components/utils/menulist";
import { weatherList } from "@/components/utils/menulist";

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
        switch (type) {
            // 사전 저장 : 리스트
            case "lists":
                let options = { songId: props._id, albumImage: props.share.image, adamid: props.artists[0].adamid }
                setCheckboxValue([...checkboxValue, options]);
                
                break;

            // 사전 저장 : 키워드
            case "keywords":
                setKeywords([...keywords, props.value]);

                break;
            
            // 최종 저장 : 모든 정보
            case "playlist":
                let info = {
                    title : title,
                    desc : desc,
                    keywords : keywords,
                    list : checkboxValue
                }
        
                const data = await apiMain.createPlayList(info);

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
        <SubPageLayout pageTitle={"관리자"} pagePath={"admin"} menuList={menuListAdmin} detailClassName={"admin"}>
            <SectionRegisterComponents
                setTitle={(e) => setTitle(e)}
                setDesc={(e) => setDesc(e)}
                saveKeyword={(e,i) => handleValue(e,i)}
                confirm={(e) => handleValue(e, "playlist")}

                setDelete={(e) => deleteSomething(e)}

                title={ title }
                desc={ desc }
                keywords={ keywords }

                weatherList={ weatherList }
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
        setTitle, setDesc, setKeywords, saveKeyword, confirm, weatherList,
        title, desc, keywords = [], setDelete
    }) => {
    const titleRef = useRef(null);
    const descRef = useRef(null);

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
                        <div>
                            {weatherList.map((e, i) => 
                                <button style={{color: "white"}} value={util.getRealWeatherName(e)} key={i} onClick={(e) => saveKeyword(e.target, "keywords")}>
                                    {util.getRealWeatherName(e)}
                                </button>
                            )}
                        </div>
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

            <section className="list">
                <div className="contents">
                    {list.map((e, i) =>
                        <ItemDBComponents data={e} iconType={"rise"} index={i} saveList={(e, i) => saveList(e, i)}/>
                    )}
                </div>
            </section>
        </article>
    )
}

// 섹션 : DB 속 플레이리스트 목록
const SectionDBComponents = ({ list }) => {
    return (
        <article id="playList">
            <TitleComponents title={`총 ${list.length}건이 검색되었어요`} />
            <section className="list">
                <div className="contents">
                    {list.map((e, i) =>
                        <ItemPlaylistComponents data={e} iconType={"rise"} index={i}/>
                    )}
                </div>
            </section>
        </article>
    )
}

const ItemDBComponents = ({ data, iconType, index, thumbnail, saveList }) => {
    
    return (
        <Fragment>
            <input type="checkbox" id={index} className="item" />
            <label htmlFor={index} onClick={() => saveList(data, "lists")}>
                
                <img src={data.images?.coverart.replace("400x400", "100x100").replace("800x800", "100x100")} alt={data.title} />
                <div>
                    <div className="info">
                        <h5>{data.title}</h5>
                        <p>{data.subtitle}</p>
                    </div>
                    <div className="action">
                        <button 
                            type="button"
                            onClick={() => {
                                let id = data.artists[0].adamid;
                                let artist = data.subtitle;
                                let title = data.title;
                                let source = data.hub.actions[1].uri;
                                let artwork = data.images?.coverart.replace("800x800","200x200").replace("400x400","200x200");

                                let final = utilPlayer.setCompressOnMusic({ id, title, artist, source, artwork });
                                utilPlayer.setCurrentTrack([final], "list");
                            }}
                        >
                            재생
                        </button>
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
                </div>
            </label>
        </Fragment>
    )
}

export default pageAdmin