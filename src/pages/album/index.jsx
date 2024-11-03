import Link from "next/link";
import React, { Fragment } from "react";
import { useQuery } from "@tanstack/react-query";

import SubPageLayout from "@/components/layout/SubPageLayout";
import utilAlbum from "@/components/utils/util_album";
import TitleComponents from "@/components/common/TitleComponents";

import MainApi from "@/api/main/main_api";

const index = () => {
    const { data: albumList, isLoading: albumListLoading } = useQuery({
        queryKey: ["subAlbumList"],
        queryFn: async () => {
            const apiMain = new MainApi();
            let list = await apiMain.getAlbumList();
            return await list;
        }
    });

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
                    {!albumListLoading ? 
                        <Fragment>
                            {albumList.map((item, i) =>
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