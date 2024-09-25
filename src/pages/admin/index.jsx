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
    <SubPageLayout pageTitle={"관리자"} pagePath={"admin"} menuList={menuListAdmin} detailClassName={"admin"}>
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
            <section className="list">
                <div className="contents">
                    {list.map((e, i) =>
                        <ItemDBComponents
                            data={e}
                            iconType={"rise"}
                            index={i}
                        />
                    )}
                </div>
            </section>
        </article>
    )
}

const ItemDBComponents = ({ data, iconType, index }) => {
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
                        >재생</button>
                    </div>
                </div>
            </label>
        </Fragment>
    )
}

export default pageAdmin