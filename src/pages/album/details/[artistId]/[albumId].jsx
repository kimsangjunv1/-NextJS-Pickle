import React, { Fragment, useEffect, useState } from "react";

import { useRouter } from "next/router";

import SubPageLayout from "@/components/layout/SubPageLayout";

import MainApi from "@/api/main/main_api";

const AlbumPage = () => {
    const router = useRouter();

    const { artistId, albumId } = router.query;

    const [ currentAlbum, setCurrentAlbum ] = useState({});

    const [ dataArtists, setDataArtists ] = useState({});
    const [ dataAlbums, setDataAlbums ] = useState({});
    const [ dataSongs, setDataSongs ] = useState({});

    const apiMain = new MainApi;

    const saveData = (params) => {
        setDataArtists(params.artists);
        setDataAlbums(params.albums);
        setDataSongs(params.songs);
    }

    const getData = async() => {
        let info = [];

        info = await apiMain.getArtistSearchList(artistId);

        saveData(info);
        setCurrentAlbum(info.albums.filter((e) => e.id == albumId));
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <SubPageLayout pageTitle={"플레이리스트"} pagePath={"playlist | details"} detailClassName={"details"}>
            <Fragment>
                <p>다음 아이디를 받아 옵니다.아티스트 : {artistId} 앨범 : {albumId}</p>
                <SectionInfoComponents
                    data={ currentAlbum }
                />
                <SectionAlbumComponents
                    data={ dataAlbums }
                />
                <SectionSongsComponents
                    data={ dataSongs }
                />
                {/* <SectionListComponents list={ list.list }/> */}
            </Fragment>
        </SubPageLayout>
    )
}

// 섹션 : 현재 앨범 정보
const SectionInfoComponents = ({ data = [] }) => {
    return (
        <article id="details">
            <section>
                <h5>{data[0]?.attributes.artistName}</h5>
                <h5>{data[0]?.attributes.name}</h5>
                <h5>{data[0]?.attributes.releaseDate}</h5>
                <img src={data[0]?.attributes.artwork.url.replace("{w}x{h}", "200x200")} alt="/" />
                <div>
                    {data[0]?.attributes.genreNames.map((e, i) => 
                        <p>{e}</p>
                    )}
                </div>
                <div>
                    <h5>apple music</h5>
                    <p>https://music.apple.com/kr/album/%EC%9D%B4%EB%9F%B0-%EA%B2%8C-%EC%82%AC%EB%9E%91%EC%9D%B4%EB%9D%BC%EB%A9%B4/1537366139?i=1537366142</p>
                </div>
            </section>
        </article>
    )
}

// 섹션 : 현재 모든 앨범 정보
const SectionAlbumComponents = ({ data = [] }) => {
    return (
        <article id="albums">
            <div></div>
        </article>
    )
}

// 섹션 : 현재 노래 정보
const SectionSongsComponents = ({ data = [] }) => {
    return (
        <article id="songs">
            <div></div>
        </article>
    )
}
 
export async function getServerSideProps ({ params }){
    const { artistId, albumId } = params;
    return { props: {artistId, albumId} }
}

export default AlbumPage