import React, { Fragment, useEffect, useState } from "react";

import SubPageLayout from "@/components/layout/SubPageLayout";
import { menuListAdmin, dummySearchList } from "@/components/utils/menulist";
import TitleComponents from "@/components/common/TitleComponents";
import Pagination from "@/components/layout/Pagination";

import OtherApi from "@/api/other/other_api";
import MainApi from "@/api/main/main_api";

// 첫 진입시 조회
// rapid 분리 필요
// 삭제 기능 추가 필요

const pageAdmin = () => {
    const apiOther = new OtherApi;
    const apiMain = new MainApi;

    const [ inputValue, setInputValue ] = useState("");
    const [ checkboxValue, setCheckboxValue ] = useState([]);
    const [ list, setList ] = useState([]);
    const [ listDB, setListDB ] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleCheckboxValue = (props) => {
        setCheckboxValue([...checkboxValue, props]);
    }
    
    const getRapidSearchData = async( pageNum = 0 ) => {
        setCheckboxValue([]);
        const test = await apiOther.getRapidSearchData({inputValue, pageNum});

        setList(test.tracks?.hits);
    }
    
    const setSaveDB = async() => {
        return await apiMain.setSongRegister(checkboxValue);
    }
    
    useEffect(() => {
        const getList = async() => {
            setListDB(await apiMain.getSongList());
        }

        getList();
    }, [])
  return (
    <SubPageLayout pageTitle={"음악관리"} pagePath={"admin"} menuList={menuListAdmin}>
        <SectionSearchComponents
            getData={() => getRapidSearchData()}
            setSearchValue={(e) => handleInputChange(e)}
            setSaveValue={() => setSaveDB()}
            setCheckboxValue={(e) => handleCheckboxValue(e)}
            setPageNumValue={(e) => getRapidSearchData(e)}
            list={list} />
        <SectionDBComponents 
            list={listDB}
        />
    </SubPageLayout>
  )
}

const SectionSearchComponents = ({ getData, setSearchValue, setSaveValue, setCheckboxValue, setPageNumValue, list = [] }) => {
    
    return (
        <article>
            <TitleComponents title={"검색어 입력"} desc={"최대 5개까지 검색 가능"} />
            <input type="text" onChange={(e) => setSearchValue(e)}/>
            <button onClick={() => getData()}>확인</button>
            <div className="list">
                {list.map((e, i) => 
                    <ItemComponents data={e} iconType={"rise"} index={i} setCheckboxValue={(event) => setCheckboxValue(event)}/>
                )}
            </div>
            <button onClick={() => setSaveValue()}>완료</button>
            {list.length ? <Pagination data={[0,1,2,3,4]} func={(e) => setPageNumValue(e)} /> : "" }
        </article>
    )
}

const SectionDBComponents = ({ list }) => {
    return (
        <article>
            <TitleComponents title={"DB에 추가 되어있는 음악"} desc={`총 ${list.length}건이 검색되었어요`} />
            <div className="list">
                {list.map((e, i) =>
                    <ItemDBComponents data={e} iconType={"rise"} index={i} setCheckboxValue={(event) => setCheckboxValue(event)}/>
                )}
            </div>
        </article>
    )
}

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
                        <img src={`/images/icon/ico-common-${iconType}.svg`} alt={`${iconType}`} />
                    </div>
                </div>
            </label>
        </Fragment>
    )
}

const ItemDBComponents = ({ data, iconType, index, setCheckboxValue }) => {
    return (
        <Fragment>
            <input type="checkbox" id={index} className="item" />
            <label htmlFor={index} onClick={() => setCheckboxValue(data.track)}>
                <img src={data.images?.coverart} alt={data.title} />
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

export default pageAdmin