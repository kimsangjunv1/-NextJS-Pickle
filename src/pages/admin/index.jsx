import React, { Fragment, useEffect, useState } from "react";

import SubPageLayout from "@/components/layout/SubPageLayout";
import { menuListAdmin } from "@/components/utils/menulist";
import TitleComponents from "@/components/common/TitleComponents";

import MainApi from "@/api/main/main_api";

import utilPlayer from "@/components/utils/util_player";

// 첫 진입시 조회
// rapid 분리 필요
// 삭제 기능 추가 필요

const pageAdmin = () => {
    const apiMain = new MainApi;

    const [ listDB, setListDB ] = useState([]);
    
    useEffect(() => {
        const getList = async() => {
            setListDB(await apiMain.getSongList());
        }

        getList();
    }, []);
  return (
    <SubPageLayout pageTitle={"음악관리"} pagePath={"admin"} menuList={menuListAdmin}>
        <SectionDBComponents 
            list={listDB}
        />
    </SubPageLayout>
  )
}

const SectionDBComponents = ({ list }) => {
    return (
        <article>
            <TitleComponents title={"DB에 추가 되어있는 음악"} desc={`총 ${list.length}건이 검색되었어요`} />
            <div className="list">
                {list.map((e, i) =>
                    <ItemDBComponents
                        data={e}
                        iconType={"rise"}
                        index={i}
                    />
                )}
            </div>
        </article>
    )
}

const ItemDBComponents = ({ data, iconType, index }) => {
    return (
        <Fragment>
            <input type="checkbox" id={index} className="item" />
            <label htmlFor={index}>
                <img src={data.images?.coverart} alt={data.title} />
                <div className="info">
                    <div className="info">
                        <h5>{data.title}</h5>
                        <p>{data.subtitle}</p>
                    </div>
                    <div className="action">
                        <img src={`/images/icon/ico-common-${iconType}.svg`} alt={`${iconType}`} />
                        <button type="button" onClick={() => utilPlayer.addTrackOnList([{songId: data}])}>재생</button>
                    </div>
                </div>
            </label>
        </Fragment>
    )
}

export default pageAdmin