import { Fragment, useState, useMemo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import Image from "next/image";

import Article from "@/components/layout/Article";
import TitleComponents from "@/components/common/TitleComponents";
import SkeletonComponents from "@/components/common/SkeletonComponents";

import util from "@/api/util";

// 섹션 : 메인 - 플레이리스트
const PlaylistSection = ({ DBPlaylist }) => {
    const [ list, setList ] = useState([]);

    const memoizedList = useMemo(() => DBPlaylist ? DBPlaylist : DBPlaylist = [], [DBPlaylist]);

    useEffect(() => {
        setList(memoizedList);
    }, [memoizedList]);
    return (
        <Article id={"playlist"}>
            <TitleComponents
                title={"어떤 플레이 리스트가 있을까?"}
                desc={"여기에서 날씨에 맞는 음악을 추천해드릴게요!"}
                image={"cloth-red"}
            />
            
            <section className="section-playlist-container">
                {list.length ? 
                    <Swiper
                        spaceBetween={8}
                        slidesPerView={6}
                    >

                        {DBPlaylist.filter((e, i) => i <= 4).map((e, key) =>
                            <SwiperSlide key={key}>
                                <ItemComponents title={e.title} desc={e.desc} keywords={e.keywords} image={e.list} id={e._id} key={key}/>
                            </SwiperSlide>
                        )}
                    </Swiper>
                    : <SkeletonItem />
                }
            </section>
        </Article>
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
                                src={e.albumImage.replace("800x800","200x200").replace("400x400","200x200")}
                                // src="/images/common/img-dummy-playlistart.png"
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

export default PlaylistSection