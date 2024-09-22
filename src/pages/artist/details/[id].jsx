import React, { Fragment, useEffect, useState } from "react";

import { useRouter } from "next/router";

import SubPageLayout from "@/components/layout/SubPageLayout";

import utilArtist from "@/components/utils/util_artist";
import MainApi from "@/api/main/main_api";
import OtherApi from "@/api/other/other_api";

import NoticeComponents from "@/components/common/NoticeComponents";

// 메인
const ArtistDetailPage = () => {
    const apiMain = new MainApi();
    const apiRapid = new OtherApi();
    
    const router = useRouter();

    const [ currentArtist, setCurrentArtist ] = useState([]);

    const [ dataAlbums, setDataAlbums ] = useState([]);
    const [ dataSongs, setDataSongs ] = useState([]);

    const { id } = router.query;

    // 함수 : 현재 가져온 정보 state 저장
    const saveData = (params) => {
        setCurrentArtist(params.artists);
        setDataAlbums(params.albums.filter((e) => e.type === "albums"));
        setDataSongs(params.songs);
    }

    // 함수 : 정보 가져옴
    const getData = async () => {
        let result = await apiMain.getArtistSearchList(id);
        let final;

        if ( !result ) {
            let details = await apiRapid.getArtistDetail(id);
            
            // 찾은 정보로 아티스트 정보 생성
            apiMain.createArtistList(utilArtist.getArtistParameter(details));

            // 현재 페이지 이용을 위해 가져온 정보를 최종 변수에 삽입
            final = utilArtist.getArtistParameter(details);
        } else {

            // 현재 페이지 이용을 위해 가져온 정보를 최종 변수에 삽입
            final = result;
        }

        saveData(final);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <SubPageLayout pageTitle={"아티스트 상세정보"} pagePath={"artists | details"} detailClassName={"details"}>
            <NoticeComponents title={ "본 페이지에서는 아티스트와 관련된 정보만 확인 가능합니다" }/>
            <SectionInfoComponents
                data={ currentArtist } albums = { dataAlbums } songs = { dataSongs }
            />
            <SectionSongsComponents
                data={ dataSongs }
            />
            <SectionAlbumComponents
                data={ dataAlbums }
            />
        </SubPageLayout>
    )
}

// 섹션 : 현재 아티스트 정보
const SectionInfoComponents = ({ data = [], albums, songs }) => {
    return(
        <article id="details">
            <section className="image">
                <img src={`${data[0]?.attributes.artwork.url.replace("{w}x{h}","200x200")}`} alt="" className="backdrop" aria-label="hidden" />
                <img src={`${data[0]?.attributes.artwork.url.replace("{w}x{h}","200x200")}`} alt="앨범아트" />
            </section>

            <section className="info">
                <section>
                    <h5>이름</h5>
                    <p>{data[0]?.attributes.name}</p>
                </section>

                <section>
                    <h5>장르</h5>
                    <div>{albums[0]?.attributes.genreNames.map((e, i) => <p>{e}</p>)}</div>
                </section>

                <section>
                    <h5>앨범수</h5>
                    <div>{albums.length}</div>
                </section>

                <section>
                    <h5>곡수</h5>
                    <div>{songs.length}</div>
                </section>

                <section>
                    <h5>외부링크</h5>
                    <div>{data[0]?.attributes.url}</div>
                </section>

                <section>
                    <h5>최근 발매한 앨범</h5>
                    <div>{albums[albums.length - 1]?.attributes.name}</div>
                </section>

                <section>
                    <h5>최근 발매한 노래</h5>
                    <div>{songs[songs.length - 1]?.attributes.name}</div>
                </section>
            </section>
        </article>
    )
}

// 섹션 : 아티스트가 소유한 노래
const SectionSongsComponents = ({ data = [] }) => {
    return (
        <article id="songs">
            {data.filter((e, i) => i >= 1).map((e, i) => 
                <div className="item">
                    
                    <article className="album-art">
                        <img src={`${e.attributes.artwork.url.replace("{w}x{h}","200x200")}`} alt="/" />
                        {/* <button type="button" onClick={() => utilPlayer.setCurrentTrack([e], "current", i)}>
                            <img src="/images/icon/ico-common-playonplayer.svg" alt="재생" />
                        </button> */}
                    </article>

                    <article className="desc">
                        <section className="info">
                            <h5>{e.attributes.name}</h5>
                            <p>{e.attributes.artistName}</p>
                        </section>
                        <section className="action">

                        </section>
                    </article>
                </div>
            )}
        </article>
    )
}

// 섹션 : 아티스트가 소유한 앨범
const SectionAlbumComponents = ({ data = [] }) => {
    return (
        <article id="albums">
            {data.map((e, i) => 
                <div className="item" key={i}>
                    <img src={`${e.attributes.artwork.url.replace("{w}x{h}", "200x200")}`} alt="앨범아트" />

                    <div className="album_desc" style={{ background: `#${e.attributes.artwork.bgColor}cc` }}>
                        <h2 className="title">{e.attributes.name}</h2>
                        <div className="genre_container">
                            {e.attributes.genreNames.map((item) => (
                            <>
                                <span className="genre">{item}</span>
                            </>
                            ))}
                        </div>
                        <p className="copyright">{e.attributes.copyright}</p>
                    </div>
                </div>
            )}
        </article>
    )
}

// 페이지에서 받아올 값
export async function getServerSideProps ({ params }){
    const { id } = params;
    return { props: {id} }
}

export default ArtistDetailPage