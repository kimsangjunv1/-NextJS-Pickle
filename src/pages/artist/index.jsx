import React, { useState, useEffect, Fragment } from "react";
import MainApi from "@/api/main/main_api";
import SubPageLayout from "@/components/layout/SubPageLayout";
import TitleComponents from "@/components/common/TitleComponents";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

const index = () => {
    const { data: artistList, isLoading: artistListLoading } = useQuery({
        queryKey: ["subArtistList"],
        queryFn: async () => {
            const apiMain = new MainApi();
            let data = await apiMain.getArtistList();
            return await data.map((e) => e.artists[0]);
        }
    });
    
    return (
        <SubPageLayout pageTitle={"아티스트"} pagePath={"artist"} detailClassName={"main"}>
            {/* <article id="recommand">
                <TitleComponents title={"오늘의 추천 아티스트"} />
                <section className="list">

                </section>
            </article> */}
            <article id="all">
                {/* <TitleComponents title={"모든 아티스트"} /> */}
                <section className="list">
                    {!artistListLoading ? 
                    <Fragment>
                        {artistList.map((e, i) =>
                            <Link href={`/artist/details/${e.id}`} className="item" key={i}>
                                <div className="image">
                                    <img src={e.attributes.artwork.url.replace("{w}x{h}","200x200")} alt="" />
                                </div>
                                <div className="info">
                                    <p>{e.attributes.name}</p>
                                    {/* <figcaption>{e.title}</figcaption> */}
                                </div>
                            </Link>
                        )}
                    </Fragment>
                    : "정보를 가져오는 중입니다.."}
                </section>
            </article>
        </SubPageLayout>
    )
}

export async function getStaticProps() {
    return {
        props: {
            title: "아티스트",
            description: "아티스트 페이지 입니다.",
            currentPage: "artist",
        },
    };
}

export default index