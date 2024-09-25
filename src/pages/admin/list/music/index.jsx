import React, { Fragment, useEffect, useState } from "react";

import SubPageLayout from "@/components/layout/SubPageLayout";
import { menuListAdmin, dummySearchList } from "@/components/utils/menulist";
import TitleComponents from "@/components/common/TitleComponents";
import Pagination from "@/components/layout/Pagination";

import OtherApi from "@/api/other/other_api";
import MainApi from "@/api/main/main_api";

import utilPlayer from "@/components/utils/util_player";

const pageAdmin = () => {
    const apiOther = new OtherApi;
    const apiMain = new MainApi;

    const [ inputValue, setInputValue ] = useState("");
    const [ checkboxValue, setCheckboxValue ] = useState([]);
    const [ list, setList ] = useState([]);
    // const [ listDB, setListDB ] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleCheckboxValue = (props) => {
        setCheckboxValue([...checkboxValue, props]);
    }
    
    const getRapidSearchData = async( pageNum = 0 ) => {
        setCheckboxValue([]);
        const data = await apiOther.getRapidSearchData({inputValue, pageNum});

        setList(data.tracks?.hits);
    }
    
    const setSaveDB = async() => {
        return await apiMain.setSongRegister(checkboxValue);
    }
    
    // useEffect(() => {
    //     const getList = async() => {
    //         setListDB(await apiMain.getSongList());
    //     }

    //     getList();
    // }, [])
  return (
    <SubPageLayout pageTitle={"관리자"} pagePath={"admin"} menuList={menuListAdmin} detailClassName={"admin"}>
        <SectionSearchComponents
            getData={() => getRapidSearchData()}
            setSearchValue={(e) => handleInputChange(e)}
            setCheckboxValue={(e) => handleCheckboxValue(e)}
            setPageNumValue={(e) => getRapidSearchData(e)}
            setPlaceholder={"검색어를 이곳에 입력해주세요"}
            list={list}
        />

        <SectionDBComponents 
            list={checkboxValue}
            setSaveValue={() => setSaveDB()}
        />
    </SubPageLayout>
  )
}

// 검색 : 검색 컴포넌트
const SectionSearchComponents = ({ 
        getData, 
        setSearchValue,
        setCheckboxValue,
        setPageNumValue,
        setPlaceholder,
        list = []
    }) => {
    return (
        <article>
            <TitleComponents title={"검색어 입력"} desc={"최대 5개까지 검색 가능"} />
            <section className="action">
                <input type="text" onChange={(e) => setSearchValue(e)} placeholder={setPlaceholder}/>
                <button onClick={() => getData()}>확인</button>
            </section>
            <section className="list">
                <div className="contents">
                    {list.map((e, i) => 
                        <ItemComponents data={e} iconType={"rise"} index={i} setCheckboxValue={(event) => setCheckboxValue(event)}/>
                    )}
                </div>
                {list.length ? <Pagination data={[0,1,2,3,4]} func={(e) => setPageNumValue(e)} /> : "" }
            </section>
        </article>
    )
}

// 검색 : 검색된 항목 컴포넌트
const ItemComponents = ({ data, iconType, index, setCheckboxValue }) => {
    return (
        <Fragment>
            <input type="checkbox" id={index} className="item" />
            <label htmlFor={index} onClick={() => setCheckboxValue(data.track)}>
                <img src={data.track?.images?.coverart} alt={data.track?.title} />
                <div className="info">
                    <div className="info">
                        <h5>{data.track?.title}</h5>
                        <p>{data.track?.subtitle}</p>
                    </div>
                    <div className="action">
                        <button 
                            type="button"
                            onClick={() => {
                                let id = data.track.artists[0].adamid;
                                let artist = data.track.subtitle;
                                let title = data.track.title;
                                let source = data.track.hub.actions[1].uri;
                                let artwork = data.track.images?.coverart.replace("800x800","200x200").replace("400x400","200x200");

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

// 보관함 : 항목을 담을 컴포넌트
const SectionDBComponents = ({ list, setSaveValue }) => {
    return (
        <article>
            <TitleComponents title={"선택한 음악"} desc={`총 ${list.length}건이 검색되었어요`} />
            <section className="list">
                <div className="contents">
                    {list.length ? list.map((e, i) =>
                        <ItemDBComponents data={e} iconType={"rise"} index={i} setCheckboxValue={(event) => setCheckboxValue(event)}/>
                    ) : "선택된 항목이 없습니다"}
                </div>
            </section>
            <button onClick={() => setSaveValue()}>완료</button>
        </article>
    )
}

// 보관함 : 선택한 항목 컴포넌트
const ItemDBComponents = ({ data, iconType, index, setCheckboxValue }) => {
    return (
        <Fragment>
            <input type="checkbox" id={index} className="item" />
            <label htmlFor={index}>
                <img src={data.images?.coverart.replace("400x400", "100x100").replace("800x800", "100x100")} alt={data.title} />
                <div>
                    <div className="info">
                        <h5>{data.title}</h5>
                        <p>{data.subtitle}</p>
                    </div>
                    <div className="action">
                        <button 
                            type="button"
                            // onClick={() => utilPlayer.addTrackOnList([{songId: data}])}
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

export default pageAdmin