import { useEffect, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import TitleComponents from "@/components/common/TitleComponents";
import SkeletonComponents from "@/components/common/SkeletonComponents";

import Article from "@/components/layout/Article";

import Link from "next/link";
import Image from "next/image";
import util from "@/api/util";


// 섹션 : 앨범
const AlbumSection = ({ albumList }) => {
    const [ list, setList ] = useState([]);

    // 함수 : 랜덤으로 10개 데이터 재가공
    const convertData = (target) => {
        let mappingData = [];

        if(target.length){
            for (let i=0; i<10; i++) {
                let rand = util.getRandomNum(target.length - 1);
                mappingData.push(target[rand]);
            }
        }

        return mappingData;
    }

    const memoizedList = useMemo(() => albumList ? albumList : albumList = [], [albumList]);

    useEffect(() => {
        setList(convertData(memoizedList));
    }, [memoizedList]);

    return (
        <Article id={"album"}>
            {/* 제목 */}
            <TitleComponents
                title={"어떤 앨범이 연관되어 있을까?"}
                desc={"날씨에 맞게 추천된 아티스트의 앨범을 보여드릴게요!"}
                image={"laugh"}
            />
            {/* 제목 END */}

            {/* 컨텐츠 */}
            <section className="section-album-container">
                {list.length ? 
                    <Swiper
                        spaceBetween={8}
                        slidesPerView={6}
                    >   
                        {list.map((data, key) => 
                            <SwiperSlide key={key}>
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
        <Link href={`/album/details/${data.artistId}/${data.id}`} className="item">
            <Image
                src={`${data.attributes.artwork.url.replace("{w}x{h}","200x200")}`}
                // layout="fill"
                width={216}
                height={216}
                alt={`${data.attributes.name}`}
            />
            <div className="info">
                <figcaption>{data.attributes.name}</figcaption>
                <p>{data.attributes.artistName}</p>
            </div>
        </Link>
    )
}

// 로딩 : 스켈레톤 UI
const SkeletonItem = () => {
    return (
    <div className="skeleton-wrapper">
        {Array(6).fill(0).map((e, i) =>
                <div className="skeleton-profile" key={i}>
                    <SkeletonComponents type="thumbnail" />

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