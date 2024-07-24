import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import SubPageLayout from "@/components/layout/SubPageLayout";
import Link from "next/link";

import MainApi from "@/api/main/main_api";

import utilPlayer from "@/components/utils/util_player";

const AlbumPage = () => {
    const api = new MainApi();
    const [ list, setList ] = useState([]);

    const router = useRouter();
    const { id } = router.query;

    
    const getList = async () => {
        let data = await api.analyzePlayList(id);
        setList(data);
    }
    
    useEffect(() => {
        getList();
    }, [])

    return (
        <SubPageLayout pageTitle={"플레이리스트"} pagePath={"playlist"} detailClassName={"details"}>
            <Fragment>
                <SectionInfoComponents desc={ list.desc } keywords={ list.keywords } title={ list.title } list={ list.list }/>
                <SectionListComponents list={ list.list }/>
            </Fragment>
        </SubPageLayout>
    )
}

// 섹션 : 정보
const SectionInfoComponents = ({ desc, keywords = [], title, list = [] }) => {
    // console.log("리스트 상태 : ", list)
    return (
        <article id="info">
            <section className="album">
                <section>
                    {list.map((e, i) =>
                        <Fragment key={i}>
                            {i <= 3 && <img src={`${e.albumImage}`} alt="" />}
                        </Fragment>
                    )}
                </section>
                <section>
                    <button type="button" onClick={() => utilPlayer.setCurrentTrack(list, "list")}>
                        <img src="/images/icon/ico-common-playonplayer.svg" alt="재생목록 추가" />
                    </button>
                </section>
            </section>
            <section className="description">
                <section>
                    <h5>플레이리스트 이름</h5>
                    <p>{title}</p>
                </section>
                <section>
                    <h5>설명</h5>
                    <p>{desc}</p>
                </section>
                <section>
                    <h5>포함된 음악 갯수</h5>
                    <p>{list.length}곡</p>
                </section>
                <section>
                    <h5>키워드</h5>
                    <div>
                        {keywords.map((e, i) => 
                            <span key={i}>{e}</span>
                        )}
                    </div>
                </section>
            </section>
        </article>
    )
}

// 섹션 : 목록
const SectionListComponents = ({ list = [] }) => {
    // console.log("상태 : ",list)
    return (
        <article id="list">

            {list.map((e, i) =>
                <figure className="item" key={i}>
                    <img src={`${e.albumImage}`} alt="/" />
        
                    <div className="info">
                        <section>
                            <figcaption>{e.songId.title}</figcaption>
                            <Link href={`/artist/details/${e.adamid}`}>{e.songId.subtitle}</Link>
                        </section>
                        <section>
                            <button><img src="/images/icon/ico-common-addfolder.svg" alt="재생목록 추가" /></button>
                            <button><img src="/images/icon/ico-common-download.svg" alt="다운로드" /></button>
                            <button><img src="/images/icon/ico-common-play.svg" alt="재생" onClick={() => utilPlayer.setCurrentTrack([e], "list")}/></button>
                            {/* <button><img src="/images/icon/ico-common-play.svg" alt="재생" onClick={() => utilPlayer.setCurrentTrack(e, "current")}/></button> */}
                        </section>
                    </div>
                </figure>
            )}
        </article>
    )
}

export async function getServerSideProps ({ params }){
    const { id } = params;
    return { 
        props: {
            id: id,
            title: "플레이리스트",
            description: "홈 페이지 입니다.",
            currentPage: "home",
        }
    }
}

export default AlbumPage