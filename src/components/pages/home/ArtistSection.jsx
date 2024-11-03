import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import Image from "next/image";

import Article from "@/components/layout/Article";
import TitleComponents from "@/components/common/TitleComponents";
import SkeletonComponents from "@/components/common/SkeletonComponents";

// 섹션 : 아티스트
const ArtistSection = ({ songList = [] }) => {
    return (
        <Article id={"artist"}>
            {/* 제목 */}
            <TitleComponents
                title={"관련된 노래를 누가 불렀을까 ?"}
                desc={"날씨에 맞는 음악을 불렀던 가수들을 보여드려요!"}
                image={"hand"}
            />
            {/* 제목 END */}

            {/* 내용 */}
            <section className="section-artist-container">
                <Swiper
                    spaceBetween={8}
                    slidesPerView={6}
                >    
                    {songList.length ? songList.map((e, i) => 
                        <SwiperSlide key={i}>
                            <ItemComponents data={e} />
                        </SwiperSlide>
                    ) : <SkeletonItem />}
                </Swiper>
            </section>
            {/* 내용 END */}
        </Article>
    )
}

// 공통 : 아티스트
const ItemComponents = ({ data }) => {
    return (
        <Link href={`/artist/details/${data.artists[0].adamid}`} className="item">
            <figure>
                <img src={data.images.background.replace("800x800","200x200").replace("400x400","200x200")} alt={data.subtitle} />
                
                <section className="info">
                    <figcaption>{data.subtitle}</figcaption>
                </section>
            </figure>
        </Link>
    )
}

// 로딩 : 스켈레톤 UI
const SkeletonItem = () => {
    return (
    <div className="skeleton-wrapper">
        {Array(6).fill(0).map((e, i) =>
                <div className="skeleton-artist" key={i}>
                    <SkeletonComponents type="thumbnail" />
                </div>
            )}
    </div>
    );
};

export default ArtistSection