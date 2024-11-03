import React, { useState, useEffect, Fragment } from "react";
import MainApi from "@/api/main/main_api";
import SubPageLayout from "@/components/layout/SubPageLayout";
import TitleComponents from "@/components/common/TitleComponents";
import Link from "next/link";

const index = () => {
    const [ list, setList ] = useState([]);

    const apiMain = new MainApi();

    // 메인 데이터
    const getApiData = async () => {
        setList(await apiMain.getPlayList());
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <SubPageLayout pageTitle={"플레이리스트"} pagePath={"playlist"} detailClassName={"main"}>
            {/* <article id="recommand">
                <TitleComponents title={"오늘의 추천 플레이리스트"} />
                <section className="list">

                </section>
            </article> */}
            <article id="all">
                {/* <TitleComponents title={"모든 플레이리스트"} /> */}
                <section className="list">
                    {list.map((e, i) =>
                        <Link href={`/playlist/details/${e._id}`} className="item" key={i}>
                            <div className="image">
                                {e.list.map((e, i) => {
                                    return(
                                        <Fragment key={i}>
                                            {i <= 3 && <img src={e.albumImage} alt="" />}
                                        </Fragment>
                                    )
                                })}
                            </div>
                            <div className="info">
                                <p>{e.desc}</p>
                                <figcaption>{e.title}</figcaption>
                            </div>
                        </Link>
                    )}
                </section>
            </article>
        </SubPageLayout>
    )
}

export async function getStaticProps() {
    return {
        props: {
            title: "플레이리스트",
            description: "플레이리스트 페이지 입니다.",
            currentPage: "playlist",
        },
    };
}

export default index