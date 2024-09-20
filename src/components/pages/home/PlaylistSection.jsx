import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

import Article from "@/components/layout/Article";
import TitleComponents from "@/components/common/TitleComponents";

import { Swiper, SwiperSlide } from "swiper/react";

import util from "@/api/util";

// 섹션 : 메인 - 플레이리스트
const PlaylistSection = ({ DBPlaylist, DBWeather }) => {
    return (
        <Article id={"playlist"}>
            <TitleComponents
                title={"비오는 날인데 어떤 플레이 리스트가 있을까?"}
                desc={"여기에서 날씨에 맞는 음악을 추천해드릴게요!"}
                image={"cloth-red"}
            />
            
            <section className="section-playlist-container">
                <Swiper
                    spaceBetween={24}
                    slidesPerView={3}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >    
                    <SwiperSlide>
                        <WeatherComponents data={ DBWeather }/>
                    </SwiperSlide>

                    {DBPlaylist.filter((e, i) => i <= 4).map((e, key) =>
                        <SwiperSlide key={key}>
                            <ItemComponents title={e.title} desc={e.desc} keywords={e.keywords} image={e.list} id={e._id} key={key}/>
                        </SwiperSlide>
                    )}
                </Swiper>
            </section>
        </Article>
    )
}

// 컴포넌트 : 날씨
const WeatherComponents = ({ data }) => {
    data = data.forecasts?.filter((e, i) => i == 0);
    
    return(
        <Fragment>
            {data ? 
                <Link href="/weather" className="item main">
                    <section className="image">
                        <img src="https://t3.ftcdn.net/jpg/01/22/14/82/360_F_122148268_Q8WEYYO1hP83PLGlIKAP8VSHnGHbTfpk.jpg" alt="앨범아트" />
                    </section>
                    <section className="info">
                        <p className="degree">서울은 지금,<br/><strong>{util.convertCelcius("72")}°</strong></p>
                        <figcaption className="desc">오늘 같이 {util.getWeatherName(data[0]?.text)}날,<br/>듣기 좋은 음악들을 정리해봤어요.</figcaption>
                    </section>
                </Link>
            : "로딩중"}
        </Fragment>
    )
}

// 컴포넌트 : 플레이리스트 목록
const ItemComponents = ({ title, desc, keywords, id, image }) => {
    return(
        <Link href={`/playlist/details/${id}`} className="item">
            <section className="image">
                {image?.map((e, i) => {
                    return (
                        <Fragment key={i}>
                            {i == 0 && <Image
                                src="/images/common/img-dummy-playlistart.png"
                                layout="fill"
                                alt="더미"
                                className="albumart"
                            />}
                            {/* {i == 0 && <img src={e.albumImage} alt={`${i}번째 앨범아트`} key={i} />}    */}
                        </Fragment>
                    )   
                })}
            </section>
            <section className="info">
                <p>{title}</p>
                <figcaption>{desc}</figcaption>
            </section>
        </Link>
    )
}

export default PlaylistSection