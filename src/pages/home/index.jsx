import React, { Fragment, useEffect, useState } from "react";

import PlaylistSection from "@/components/pages/home/PlaylistSection";
import WeatherSection from "@/components/pages/home/WeatherSection";
import ArtistSection from "@/components/pages/home/ArtistSection";
import AlbumSection from "@/components/pages/home/AlbumSection";
import RecentSection from "@/components/pages/home/RecentSection";

import YahooApi from "@/api/other/yahoo_api";
import MainApi from "@/api/main/main_api";

import { dummyWeather } from "@/components/utils/menulist";

import useSWR from "swr";
import { fetcherYahoo } from "@/components/utils/fetcher";

import utilArtist from "@/components/utils/util_artist";
import IntroSection from "@/components/pages/home/IntroSection";
import NoticeComponents from "@/components/common/NoticeComponents";

const main = () => {
    const [ weatherData, setWeatherData ] = useState([]);

    const [ playlist, setPlaylist ] = useState([]);
    const [ songList, setSongList ] = useState([]);
    const [ artistList, setArtistList ] = useState([]);

    const apiMain = new MainApi();
    const apiYahoo = new YahooApi();

    // 메인 데이터
    const getWeatherData = async () => {
        // setWeather(await apiYahoo.getWeatherData());
        setWeatherData(dummyWeather);
    }

    // const { data: weatherData, error: weatherError } = useSWR("/weather/seoul", fetcherYahoo);
    
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
        getWeatherData();
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
            <NoticeComponents title={"2024.09.20 | 현재 개선 중 입니다."}/>
            <IntroSection DBPlaylist={ playlist } />
            <WeatherSection DBWeather={ weatherData } />
            <PlaylistSection DBPlaylist={ playlist } />
            <ArtistSection DBPlaylist={ playlist } songList={ songList }/>
            <AlbumSection DBPlaylist={ playlist } artistDetailsList={ artistList }/>
            {/* <RecentSection /> */}
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