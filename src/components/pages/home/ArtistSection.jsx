import React, { Fragment, useEffect, useState } from "react";

import Link from "next/link";

import Article from "@/components/layout/Article";
import TitleComponents from "@/components/common/TitleComponents";
import MainApi from "@/api/main/main_api";

import utilArtist from "@/components/utils/util_artist";

import { Swiper, SwiperSlide } from "swiper/react";

const ArtistSection = ({ songList }) => {
    return (
        <Article id={"artist"}>
            {/* 제목 */}
            <TitleComponents title={"누가 불렀을까 ?"} desc={"날씨에 맞는 음악을 불렀던 가수들을 보여드려요!"} />
            {/* 제목 END */}

            {/* 내용 */}
            <section className="section-artist-container">
                {/* {Array(8).fill(0).map((i, key) => 
                    <ItemComponents korName={""} engName={""} count={""} key={key} />
                )} */}
                <Swiper
                    spaceBetween={24}
                    slidesPerView={8}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >    
                    {songList.map((e, i) => 
                        <SwiperSlide key={i}>
                            <ItemComponents data={e} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </section>
            {/* 내용 END */}
        </Article>
    )
}

const ItemComponents = ({ data }) => {
    // console.log("받아오는 데이터 ",data)
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
            <img src={`${data.images.background}`} alt="/" />
        </Link>
    )
}

export default ArtistSection