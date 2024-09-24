import React, { Fragment, useEffect, useState } from "react";

import TodayWeatherSection from "@/components/pages/home/TodayWeatherSection";
import PlaylistSection from "@/components/pages/home/PlaylistSection";
import WeatherSection from "@/components/pages/home/WeatherSection";
import ArtistSection from "@/components/pages/home/ArtistSection";
import AlbumSection from "@/components/pages/home/AlbumSection";
import RecentSection from "@/components/pages/home/RecentSection";

import MainApi from "@/api/main/main_api";
import ImageApi from "@/api/other/stock_image_api";

import useWeather from "@/components/hooks/useWeather";
import useImage from "@/components/hooks/useImage";

import { dummyWeather } from "@/components/utils/menulist";
import { dummyImageList } from "@/components/utils/menulist";

import utilArtist from "@/components/utils/util_artist";
import IntroSection from "@/components/pages/home/IntroSection";
import NoticeComponents from "@/components/common/NoticeComponents";

const main = () => {
    const [playlist, setPlaylist] = useState([]);
    const [songList, setSongList] = useState([]);
    const [artistList, setArtistList] = useState([]);

    const { weatherData } = useWeather();
    // const { imageData } = useImage(weatherData?.current_observation?.condition.text);
    
    const apiMain = new MainApi();
    
    // 4. 컴포넌트 마운트 시 플레이리스트 가져오기
    const getPlayList = async () => {
        const data = await apiMain.getPlayList();
        setPlaylist(data);
    };
    
    // 5. 플레이리스트가 업데이트되면 노래 목록 가져오기
    const getSongList = async () => {
        if (playlist.length) {
            const data = await apiMain.getSongSearchList(utilArtist.getMainArtistList(playlist));
            setSongList(data);
        }
    };
    
    // 6. 노래 목록이 업데이트되면 아티스트 목록 가져오기
    const getArtistList = async () => {
        if (songList.length) {
            const data = await apiMain.getMultipleArtists(utilArtist.getSongAdamid(songList));
            setArtistList(data);
        }
    };
    
    // 7. 컴포넌트 마운트 시 플레이리스트 가져오기 호출
    useEffect(() => {
        getPlayList();
    }, []);
    
    // 8. 플레이리스트가 업데이트될 때마다 노래 목록 가져오기 호출
    useEffect(() => {
        getSongList();
    }, [playlist]);
    
    // 9. 노래 목록이 업데이트될 때마다 아티스트 목록 가져오기 호출
    useEffect(() => {
        getArtistList();
    }, [songList]);
    
    return (
        <Fragment>
            {/* <NoticeComponents title={"2024.09.20 | 현재 개선 중 입니다."}/> */}
            {/* <TodayWeatherSection DBWeatherImage={ dummyImageList } />
            <WeatherSection DBWeather={ weatherData } /> */}
            <IntroSection DBPlaylist={ playlist } />
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