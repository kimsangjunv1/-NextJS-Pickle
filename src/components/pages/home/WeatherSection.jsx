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
                title={
                    <Fragment>
                        {`${util.getWeatherName(DBWeather?.current_observation?.condition.text)}날이네요`}
                        <br />
                        {`${util.getRealWeatherName(DBWeather?.current_observation?.condition.text)} 날씨에 관련된 음악을 추천드릴게요!`}
                    </Fragment>
                }
                desc={"여기에서 날씨에 맞는 음악을 추천해드릴게요!"}
                image={"cloth-red"}
            />
            
            <section className="section-playlist-container">
                {DBWeather ? 
                    <Swiper
                        spaceBetween={8}
                        slidesPerView={6}
                    >
                        {DBWeather?.forecasts?.map((e, key) =>
                            <SwiperSlide key={key} className="item">
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
            <h6>{util.getDayName(data.day)}</h6>
            <div className="degree">
                <p className="low">{util.convertCelcius(data.low)}°</p>
                <p className="high">{util.convertCelcius(data.high)}°</p>
            </div>
            <p>{util.getRealWeatherName(data.text)}</p>
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