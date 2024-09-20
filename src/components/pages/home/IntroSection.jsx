import React, { useState, useEffect, Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Article from "@/components/layout/Article";
import SkeletonComponents from "@/components/common/SkeletonComponents";

import Link from "next/link";
import Image from "next/image";

import util from "@/api/util";

const IntroSection = ({ DBPlaylist }) => {
    const [ list, setList ] = useState([]);

    useEffect(() => {
        setList(DBPlaylist.filter((e, i) => i <= 3));
    }, [DBPlaylist])
    return (
        <Article id={"intro"}>
            {list.length ?
                <Swiper
                    spaceBetween={24}
                    slidesPerView={"auto"}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    pagination={{
                        type: "progressbar",
                    }}
                    navigation={true}
                >
                    {list.map((e, i) => 
                        <SwiperSlide key={i}>
                            <ItemComponents desc={ e.desc } keywords={ e.keywords } list={ e.list } title={ e.title } key={ i } id={ e._id } date={ e.createdAt } />
                        </SwiperSlide>
                    )}
                </Swiper>
                : <SkeletonItem />
            }
        </Article>
    )
}

const ItemComponents = ({ desc, keywords, list, title, id, date }) => {    
    return (
        <Link href={`/playlist/details/${id}`} className="item">
            <figure>
                <div className="info">
                    {/* <p>{util.elapsedTime(date.slice(0, 10))}</p> */}
                    <p>오늘 새로 추가되었어요!</p>
                    <h5>{title}</h5>
                    <figcaption>{desc}</figcaption>
                </div>

                <img src={list[0].albumImage} alt="/" className="albumart" />
                {/* <Image
                    src="/images/common/img-dummy-playlistart.png"
                    layout="fill"
                    alt="더미"
                    className="albumart"
                /> */}
                {/* <img src="/images/common/img-dummy-playlistart.png" alt="/" className="albumart" /> */}
            </figure>
        </Link>
    )
}

// 로딩 : 스켈레톤 UI
const SkeletonItem = () => {
    return (
    <div className="skeleton-wrapper">
        {Array(1).fill(0).map((e, i) =>
                <div className="skeleton-playlist" key={i}>
                    <SkeletonComponents type="thumbnail" />
                </div>
            )}
    </div>
    );
};

export default IntroSection