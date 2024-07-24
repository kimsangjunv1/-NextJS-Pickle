import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

import utilArtist from "@/components/utils/util_artist";

import MainApi from "@/api/main/main_api";
import OtherApi from "@/api/other/other_api";

const ArtistDetailPage = () => {
    const apiMain = new MainApi();
    const apiRapid = new OtherApi();
    
    const router = useRouter();

    const [ list, setList ] = useState([]);

    const [ dataArtists, setDataArtists ] = useState({});
    const [ dataAlbums, setDataAlbums ] = useState({});
    const [ dataSongs, setDataSongs ] = useState({});


    const { id } = router.query;

    const saveData = (params) => {
        setList([params]);

        setDataArtists(params.albums);
        setDataAlbums(params.artists);
        setDataSongs(params.songs);
    }

    const test = async () => {
        // 307762356
        let test = await apiMain.getArtistSearchList(id);
        let final;
        console.log("test",test)

        if ( !test ) {
            console.log("정보가 없네 ~ ")
            let good = await apiRapid.getArtistDetail(id);
            console.log("가공된 찾은 정보 : ", utilArtist.getArtistParameter(good));
            console.log("기존 DB에 저장 : ", apiMain.createArtistList(utilArtist.getArtistParameter(good)));

            final = utilArtist.getArtistParameter(good);
        } else {
            final = test;
        }

        saveData(final);
    }

    useEffect(() => {
        test();
    }, [])

    return (
        <Fragment>
            {list.length &&
                    <TestComponents artists={ list[0].artists[0] }/>
            }
        </Fragment>
    )
}

const TestComponents = ({ artists, albums, songs }) => {
    console.log("받아오는 것", artists, albums, songs)
    return(
        <Fragment>
            <img src={`${artists.attributes.artwork.url.replace("{w}x{h}","200x200")}`} alt="" style={{ width:"210px" }}/>
            <p>{artists.attributes.name}에 대한 정보를 가져옵니다.</p>
        </Fragment>
    )
}

export async function getServerSideProps ({ params }){
    const { id } = params;
    return { props: {id} }
}

export default ArtistDetailPage