import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

import SubPageLayout from "@/components/layout/SubPageLayout";
import MainApi from "@/api/main/main_api";
import OtherApi from "@/api/other/other_api";
import utilPlayer from "@/components/utils/util_player";

import Link from "next/link";

const AlbumPage = () => {
    const router = useRouter();

    const { artistId, albumId } = router.query;

    const [ currentDetail, setCurrentDetail ] = useState({});
    const [ dataArtists, setDataArtists ] = useState([]);
    const [ dataSongs, setDataSongs ] = useState([]);

    const apiMain = new MainApi();
    const apiRapid = new OtherApi();

    // 함수 : 현재 가져온 정보 state 저장
    const saveData = (params) => {
        setCurrentDetail(params.attributes);
        setDataArtists(params.relationships.artists.data);
        setDataSongs(params.relationships.tracks.data);
    }

    // 함수 : 정보 가져옴
    const getData = async () => {
        let result = await apiMain.getAlbumSearchList(albumId);
        let final;

        if ( !result ) {
            let details = await apiRapid.getAlbumDetail(albumId);
            
            // 찾은 정보로 아티스트 정보 생성
            apiMain.createAlbumList(details.data[0]);

            // 현재 페이지 이용을 위해 가져온 정보를 최종 변수에 삽입
            final = details.data[0];
        } else {
            // 현재 페이지 이용을 위해 가져온 정보를 최종 변수에 삽입
            final = result;
        }

        saveData(final)
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <SubPageLayout pageTitle={"앨범 상세정보"} pagePath={"playlist | details"} detailClassName={"details"}>
            <Fragment>
                <SectionInfoComponents
                    data={ currentDetail }
                    dataSongs={ dataSongs }
                />
                <SectionSongsComponents
                    dataSongs={ dataSongs }
                    dataArtists={ dataArtists }
                />
            </Fragment>
        </SubPageLayout>
    )
}

// 섹션 : 현재 앨범 정보
const SectionInfoComponents = ({ data, dataSongs }) => {
    console.log("eepdlxj", data)
    return (
        <Fragment>
            {Object.keys(data).length != 0 ? 
                <article id="details">
                    <section className="image">
                        <img src={`${data.artwork.url.replace("{w}x{h}","200x200")}`} alt="" className="backdrop" aria-label="hidden" />
                        <img src={`${data.artwork.url.replace("{w}x{h}","200x200")}`} alt="앨범아트" />
                    </section>
        
                    <section className="info">
                        <section>
                            <h5>이름</h5>
                            <p>{data.name}</p>
                        </section>
        
                        {/* <section>
                            <h5>앨범수</h5>
                            <div>{albums.length}</div>
                            </section> */}
        
                        <section>
                            <h5>곡수</h5>
                            <p>{dataSongs.length}</p>
                        </section>
        
                        <section>
                            <h5>외부링크</h5>
                            <p>{data.url}</p>
                        </section>

                        <section>
                            <h5>장르</h5>
                            <div>{data.genreNames.map((e, i) => <span>{e}</span>)}</div>
                        </section>
        
                        {/* <section>
                            <h5>최근 발매한 앨범</h5>
                            <div>{data[data.length - 1]?.name}</div>
                        </section>
        
                        <section>
                            <h5>최근 발매한 노래</h5>
                            <div>{data[data.length - 1]?.name}</div>
                        </section> */}
                    </section>
                </article>
                : "asd"
            }
        </Fragment>
    )
}

// 섹션 : 현재 노래 정보
const SectionSongsComponents = ({ dataSongs, dataArtists }) => {
    return (
        <article id="songs">
            {dataSongs.map((e, i) => 
                <figure className="item" key={i}>
                    <img src={`${e.attributes.artwork.url.replace("{w}x{h}","200x200")}`} alt={e.attributes.name} />

                    <div className="info">
                        <section>
                            <figcaption>{e.attributes.name}</figcaption>
                            <Link href={`/artist/details/${dataArtists.id}`}>{e.attributes.artistName}</Link>
                        </section>
                        <section>
                            <button><img src="/images/icon/ico-common-addfolder.svg" alt="재생목록 추가" /></button>
                            <button><img src="/images/icon/ico-common-download.svg" alt="다운로드" /></button>
                            <button>
                                <img
                                    src="/images/icon/ico-common-play.svg"
                                    alt="재생"
                                    onClick={() => {
                                        let id = e.id;
                                        let artist = e.attributes.artistName;
                                        let title = e.attributes.name;
                                        let source = e.attributes.previews[0].url;
                                        let artwork = e.attributes.artwork.url.replace("{w}x{h}","200x200");

                                        let final = utilPlayer.setCompressOnMusic({ id, title, artist, source, artwork });
                                        utilPlayer.setCurrentTrack([final], "list");
                                    }
                                }/>
                            </button>
                        </section>
                    </div>
                </figure>
            )}
        </article>
    )
}
 
export async function getServerSideProps ({ params }){
    const { artistId, albumId } = params;
    return { props: {artistId, albumId} }
}

export default AlbumPage