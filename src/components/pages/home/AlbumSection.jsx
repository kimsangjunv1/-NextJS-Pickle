import React, { useEffect, useState } from "react";

import TitleComponents from "@/components/common/TitleComponents";
import Article from "@/components/layout/Article";
import Link from "next/link";

import util from "@/api/util";

import { Swiper, SwiperSlide } from "swiper/react";

const AlbumSection = ({ artistDetailsList }) => {
    const [ list, setList ] = useState([]);

    const mappingData = () => {
        // console.log("처음 들어오는 값 : ",artistDetailsList)
        if(artistDetailsList.length){
            const good = artistDetailsList.map(target => {
                let rand = util.getRandomNum(target.albums.length - 1);
                let final = target.albums[rand].attributes;

                final.albumId = target.albums[rand].id;
                final.pathId = target.artists[0].id;

                return final;
            })

            setList(good);
        }
    }

    useEffect(() => {
        mappingData();
    }, [artistDetailsList])

    return (
        <Article id={"album"}>
            {/* 제목 */}
            <TitleComponents title={"어떤 앨범이 있을까?"} desc={"날씨에 맞게 추천된 아티스트의 앨범을 보여드릴게요!"} />
            {/* 제목 END */}

            <section className="section-album-container">
                <Swiper
                    spaceBetween={24}
                    slidesPerView={6}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >   
                    {list.map((data, key) => 
                        <SwiperSlide>
                            <ItemComponents data={ data } key={key} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </section>
        </Article>
    )
}

const ItemComponents = ({ data }) => {
    // console.log("앨범 : ",data)
    return (
        <Link href={`/album/details/${data.pathId}/${data.albumId}`} className="item">
            <img src={`${data.artwork.url.replace("{w}x{h}","200x200")}`} alt="/" />
            <div className="info">
                <figcaption>{data.name}</figcaption>
                <p>{data.artistName}</p>
            </div>
        </Link>
    )
}

export default AlbumSection