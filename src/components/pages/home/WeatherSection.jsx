import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import Image from "next/image";

import Article from "@/components/layout/Article";
import TitleComponents from "@/components/common/TitleComponents";
import SkeletonComponents from "@/components/common/SkeletonComponents";

import util from "@/api/util";

// 섹션 : 메인 - 플레이리스트
const WeatherSection = ({ DBWeather }) => {
    return (
        <Article id={"weather"}>
            <TitleComponents
                title={"이번주 날씨를 확인해보세요!"}
                desc={"여기에서 날씨에 맞는 음악을 추천해드릴게요!"}
                image={"cloth-red"}
            />
            
            <section className="section-playlist-container">
                {DBWeather ? 
                    <Swiper
                        spaceBetween={8}
                        slidesPerView={5}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                    >
                        {DBWeather.forecasts.map((e, key) =>
                            <SwiperSlide key={key}>
                                <ItemComponents data={e}/>
                            </SwiperSlide>
                        )}
                    </Swiper>
                    : <SkeletonItem />
                }
            </section>
        </Article>
    )
}

// 컴포넌트 : 날씨
const ItemComponents = ({ data }) => {
    return(
        <Fragment>
            <Link href="/weather" className="item main">
                <section className="image">
                    <img src="https://t3.ftcdn.net/jpg/01/22/14/82/360_F_122148268_Q8WEYYO1hP83PLGlIKAP8VSHnGHbTfpk.jpg" alt="앨범아트" />
                </section>
                <section className="info">
                    <p>{util.getDayName(data.day)}</p>
                    <p className="degree">{util.convertCelcius(data.low)}° | {util.convertCelcius(data.high)}°</p>
                    <figcaption className="desc">{util.getRealWeatherName(data.text)}</figcaption>
                </section>
            </Link>
        </Fragment>
    )
}

// 로딩 : 스켈레톤 UI
const SkeletonItem = () => {
    return (
    <div className="skeleton-wrapper">
        {Array(5).fill(0).map((e, i) =>
                <div className="skeleton-playlist" key={i}>
                    <SkeletonComponents type="thumbnail" />
                </div>
            )}
    </div>
    );
};

export default WeatherSection