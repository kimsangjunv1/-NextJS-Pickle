import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import Image from "next/image";

import Article from "@/components/layout/Article";
import TitleComponents from "@/components/common/TitleComponents";
import SkeletonComponents from "@/components/common/SkeletonComponents";

// 섹션 : 아티스트
const ArtistSection = ({ songList }) => {
    return (
        <Article id={"artist"}>
            {/* 제목 */}
            <TitleComponents
                title={"누가 불렀을까 ?"}
                desc={"날씨에 맞는 음악을 불렀던 가수들을 보여드려요!"}
                image={"hand"}
            />
            {/* 제목 END */}

            {/* 내용 */}
            <section className="section-artist-container">
                {/* {Array(8).fill(0).map((i, key) => 
                    <ItemComponents korName={""} engName={""} count={""} key={key} />
                )} */}
                <Swiper
                    spaceBetween={24}
                    slidesPerView={8}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
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
            <div className="info">
                <section className="artist">
                    {/* <p>GIRI BOY</p> */}
                    <figcaption>{data.subtitle}</figcaption>
                </section>
                <section className="view">
                    <img src="/images/icon/ico-common-rise.svg" alt="/" />
                    <p>5,677</p>
                    <h5>View</h5>
                </section>
            </div>
            <Image
                src={`${data.images.background}`}
                layout="fill"
                alt={`${data.subtitle}`}
            />
            {/* <img src={`${data.images.background}`} alt="/" /> */}
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