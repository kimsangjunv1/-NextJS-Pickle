import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import SubPageLayout from "@/components/layout/SubPageLayout";
import MainApi from "@/api/main/main_api";
import utilAlbum from "@/components/utils/util_album";
import TitleComponents from "@/components/common/TitleComponents";

const index = () => {
    const [ list, setList ] = useState([]);

    const [ album, setAlbum ] = useState([]);

    const apiMain = new MainApi();

    // 메인 데이터
    const getApiData = async () => {
        setList(await apiMain.getAlbumList());
    }

    useEffect(() => {
        getApiData();
    }, [])

    useEffect(() => {
        setAlbum(list.albums);
    }, [list])

    return (
        <SubPageLayout pageTitle={"앨범"} pagePath={"album"} detailClassName={"main"}>
            {/* <article id="recommand">
                <TitleComponents title={"오늘의 추천 아티스트"} />
                <section className="list">

                </section>
            </article> */}
            <article id="all">
                {/* <TitleComponents title={"모든 아티스트"} /> */}
                <section className="list">
                    {Object.keys(list).length != 0 ? 
                        <Fragment>
                            {list.map((item, i) =>
                                <Link href={`/album/details/${item.relationships.artists.data[0].id}/${item.id}`} className="item" key={i}>
                                    <div className="image">
                                        <img src={item.attributes.artwork.url.replace("{w}x{h}","200x200")} alt="" />
                                    </div>
                                    <div className="info">
                                        <p>{item.attributes.name}</p>
                                    </div>
                                </Link>
                            )}
                        </Fragment>
                    : "정보를 가져오는 중입니다."}
                </section>
            </article>
        </SubPageLayout>
    )
}

export async function getStaticProps() {
    return {
        props: {
            title: "앨범",
            description: "앨범 페이지 입니다.",
            currentPage: "album",
        },
    };
}

export default index