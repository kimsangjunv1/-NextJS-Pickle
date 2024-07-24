import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MainApi from '@/api/main/main_api';

const AlbumPage = () => {
    const router = useRouter();
    const { artistId, albumId } = router.query;

    const [ list, setList ] = useState([]);

    const [ dataArtists, setDataArtists ] = useState({});
    const [ dataAlbums, setDataAlbums ] = useState({});
    const [ dataSongs, setDataSongs ] = useState({});

    const apiMain = new MainApi;

    const saveData = (params) => {
        setList([params]);

        setDataArtists(params.albums);
        setDataAlbums(params.artists);
        setDataSongs(params.songs);
    }

    const test = async() => {
        let test = []
        test = await apiMain.getArtistSearchList(artistId);
        console.log("걸러내기 전 : ", test)
        console.log("걸러내기 후 : ", test.albums.filter((e) => e.id == albumId))
        saveData(test);
    }

    useEffect(() => {
        test();
    }, [])

    return (
        <div>
            {list.map((e, i) => 
                <Fragment>
                    <p>다음 아이디를 받아 옵니다.아티스트 : {artistId} 앨범 : {albumId}</p>
                    <img src="" alt="" />
                </Fragment>
            )}
        </div>
    )
}

export async function getServerSideProps ({ params }){
    const { artistId, albumId } = params;
    return { props: {artistId, albumId} }
}

export default AlbumPage