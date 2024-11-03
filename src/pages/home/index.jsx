import { Fragment } from "react";
import { useQuery } from "@tanstack/react-query";

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

import utilArtist from "@/components/utils/util_artist";
import IntroSection from "@/components/pages/home/IntroSection";
import NoticeComponents from "@/components/common/NoticeComponents";

import util from "@/api/util";

const main = () => {
    const { weatherData } = useWeather();
    const { imageData } = useImage(weatherData?.current_observation?.condition.text);

    const { data: playlist, isLoading: playlistLoading } = useQuery({
        queryKey: ["playlist"],
        queryFn: async () => {
            const apiMain = new MainApi();
            return await apiMain.getPlayList();
        }
    });

    const { data: songList, isLoading: songListLoading } = useQuery({
        queryKey: ["songList"],
        queryFn: async () => {
            const apiMain = new MainApi();
            return await apiMain.getSongSearchList(utilArtist.getMainArtistList(playlist));
        },
        enabled: !!playlist, // user 데이터가 있을 때만 실행
    });

    const { data: artistList, isLoading: artistListLoading } = useQuery({
        queryKey: ["artistList"],
        queryFn: async () => {
            const apiMain = new MainApi();
            return await apiMain.getMultipleArtists(utilArtist.getSongAdamid(songList));
        },
        enabled: !!songList, // user 데이터가 있을 때만 실행
    });

    // useEffect(() => {
    //     console.log("playlistLoading, songListLoading, artistListLoading", playlistLoading, songListLoading, artistListLoading)
    // }, [playlistLoading, songListLoading, artistListLoading])
    
    return (
        <Fragment>
            <NoticeComponents title={"2024.09.20 | 현재 개선 중 입니다."}/>
            <TodayWeatherSection DBWeatherImage={ imageData } select={ util.getRandomNum(10) }/>
            <WeatherSection DBWeather={ weatherData } />
            <IntroSection DBPlaylist={ playlist } loading={ playlistLoading }/>
            <PlaylistSection DBPlaylist={ playlist } loading={ playlistLoading }/>
            <ArtistSection songList={ songList } loading={ songListLoading }/>
            <AlbumSection albumList={ artistList && utilArtist.getArtistAlbumId(artistList) } loading={ artistListLoading }/>
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