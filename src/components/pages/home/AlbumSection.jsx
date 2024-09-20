import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import TitleComponents from "@/components/common/TitleComponents";
import SkeletonComponents from "@/components/common/SkeletonComponents";

import Article from "@/components/layout/Article";

import Link from "next/link";
import Image from "next/image";
import util from "@/api/util";


// 섹션 : 앨범
const AlbumSection = ({ artistDetailsList }) => {
    const [ list, setList ] = useState([]);

    const mappingData = () => {
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
            <TitleComponents
                title={"어떤 앨범이 있을까?"}
                desc={"날씨에 맞게 추천된 아티스트의 앨범을 보여드릴게요!"}
                image={"laugh"}
            />
            {/* 제목 END */}

            {/* 컨텐츠 */}
            <section className="section-album-container">
                {list.length ? 
                    <Swiper
                        spaceBetween={24}
                        slidesPerView={6}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                    >   
                        {list.map((data, key) => 
                            <SwiperSlide>
                                <ItemComponents data={ data } key={key} />
                            </SwiperSlide>
                        )}
                    </Swiper>
                    : <SkeletonItem />
                }
            </section>
            {/* 컨텐츠 END */}
        </Article>
    )
}

// 공통 : 앨범 항목
const ItemComponents = ({ data }) => {
    return (
        <Link href={`/album/details/${data.pathId}/${data.albumId}`} className="item">
            {/* <img src={`${data.artwork.url.replace("{w}x{h}","200x200")}`} alt="/" /> */}
            <Image
                src={`${data.artwork.url.replace("{w}x{h}","200x200")}`}
                // layout="fill"
                width={216}
                height={216}
                alt={`${data.name}`}
            />
            <div className="info">
                <figcaption>{data.name}</figcaption>
                <p>{data.artistName}</p>
            </div>
        </Link>
    )
}

// 로딩 : 스켈레톤 UI
const SkeletonItem = () => {
    return (
    <div className="skeleton-wrapper">
        {Array(8).fill(0).map((e, i) =>
                <div className="skeleton-profile" key={i}>
                    <SkeletonComponents type="avatar" />

                    <div>
                        <SkeletonComponents type="title" />
                        <SkeletonComponents type="text" />
                    </div>
                </div>
            )}
    </div>
    );
};

export default AlbumSection