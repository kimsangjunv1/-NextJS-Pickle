import React, { Fragment, useEffect, useState } from "react";

import PlaylistSection from "@/components/pages/home/PlaylistSection";
import EventSection from "@/components/pages/home/EventSection";
import ArtistSection from "@/components/pages/home/ArtistSection";
import AlbumSection from "@/components/pages/home/AlbumSection";
import RecentSection from "@/components/pages/home/RecentSection";

import YahooApi from "@/api/other/yahoo_api";
import MainApi from "@/api/main/main_api";

import { dummyWeather } from "@/components/utils/menulist";

import utilArtist from "@/components/utils/util_artist";
import IntroSection from "@/components/pages/home/IntroSection";
import MarqueeSection from "@/components/pages/home/MarqueeSection";

const main = () => {
    const [ weather, setWeather ] = useState([]);

    const [ playlist, setPlaylist ] = useState([]);
    const [ songList, setSongList ] = useState([]);
    const [ artistList, setArtistList ] = useState([]);

    const apiMain = new MainApi();

    // 메인 데이터
    const getApiData = async () => {
        // setWeather(await apiYahoo.getWeatherData());
        setWeather(dummyWeather);
    }
    
    const getPlayList = async () => {
        setPlaylist(await apiMain.getPlayList());
    }

    // 섹션 데이터 : 노래 목록
    const getSongList = async () => {
        if(playlist.length){
            setSongList(await apiMain.getSongSearchList(utilArtist.getMainArtistList(playlist)));
        }
    }

    // 섹션 데이터 : 아티스트
    const getArtistList = async () => {
        if(songList.length){
            setArtistList(await apiMain.getMultipleArtists(utilArtist.getSongAdamid(songList)));
        }
    }

    useEffect(() => {
        getApiData();
        getPlayList();
    }, [])

    useEffect(() => {
        getSongList();
    }, [playlist])

    useEffect(() => {
        getArtistList();
    }, [songList])
    
    return (
        <Fragment>
            {/* <MarqueeSection /> */}
            <IntroSection DBPlaylist={ playlist } />
            <PlaylistSection DBPlaylist={ playlist } DBWeather={ weather } />
            {/* <EventSection /> */}
            <ArtistSection DBPlaylist={ playlist } songList={ songList }/>
            <AlbumSection DBPlaylist={ playlist } artistDetailsList={ artistList }/>
            <RecentSection />
        </Fragment>
    )
}

export async function getStaticProps() {
    return {
        props: {
            title: "HOME",
            description: "홈 페이지 입니다.",
            currentPage: "home",
        },
    };
}

export default main