import { Fragment, useEffect, useRef, useState } from "react";

import Article from "@/components/layout/Article";

import usePlayerStore from "@/store/playerStore";
import utilPlayer from "../utils/util_player";

// 세부 정보 같은건 컴포넌트 분리 해도 괜찮지 않을까 생각함
const PlayerComponents = () => {
    // 정보
    const [ elementInfo, setElementInfo ] = useState("");

    // 요소 : 오디오 소스
    const refAudio = useRef(null);
    
    // 스토어
    const { 
        isPlaying, isNeedSizeMax, currentTrack, trackList, currentTrackIndex
    } = usePlayerStore((state) => state);

    const getPlayState = () => {
        utilPlayer.setPlayState(isPlaying);
    }

    // 감지 : 트랙리스트
    useEffect(() => {
        console.log("트랙리스트 추가 감지 : ",trackList)
        utilPlayer.setCurrentTrack(trackList);
    }, [trackList])

    // 감지 : 현재 트랙 번호
    useEffect(() => {
        console.log("순서 변화 감지 : ",currentTrackIndex)
    }, [currentTrackIndex])

    // 감지 : 재생 상태
    useEffect(() => {
        console.log("재생 상태 감지 : ",isPlaying);
        utilPlayer.setProgress(elementInfo);
    }, [isPlaying])
    
    return (
        <Fragment>
            {/* 플레이어 : 최소 */}
            <section id="min" className={`player show`}>
                <div className="player-inner">
                    <MinimizeComponents
                        setState={() => utilPlayer.setPlayState(isPlaying)}
                        setPlayState={() => utilPlayer.setPlaying(refAudio, isPlaying)}
                        setExpandPlayer={() => utilPlayer.setPlayerSize(isNeedSizeMax)}
                        setProgress={(e, i, k, j) => setElementInfo({e, i, k, j, refAudio, getPlayState})}
                        setVolume={(e) =>  utilPlayer.setVolume({e,refAudio})}
                        
                        currentTrack={currentTrack}
                        isPlaying={isPlaying}
                        trackList={trackList}
                    />
                </div>
            </section>
            {/* 플레이어 : 최소 END */}

            {/* 플레이어 : 최대 */}
            {isNeedSizeMax !== 2 &&
                <section id="max" className={`player ${ isNeedSizeMax ? "none" : "show" }`}>
                    <div className="player-inner">
                        <MaximizeComponents
                            setPlayState={() => utilPlayer.setPlaying(refAudio, isPlaying)}
                            setExpandPlayer={() => utilPlayer.setPlayerSize(isNeedSizeMax)}
                            
                            currentTrackIndex={currentTrackIndex}
                            currentTrack={currentTrack}
                            isPlaying={isPlaying}
                            trackList={trackList}
                        />
                    </div>
                </section>
            }
            {/* 플레이어 : 최대 END */}

            {/* 음악 소스 */}
            <audio
                className="audio"
                src={`${currentTrack.hub?.actions[1].uri}`}
                type="audio/m4a"
                ref={refAudio}
                controls
                // autoPlay
            />
            {/* 음악 소스 END */}
        </Fragment>
        
    )
}

// 플레이어 : 최소화
const MinimizeComponents = ({
        setState,
        setPlayState,
        setExpandPlayer,
        setProgress,
        setVolume,
        isPlaying,
        currentTrack,
        trackList
    }) => {

    const refEstimatedTime = useRef(null);
    const refFinishTime = useRef(null);
    const refProgressBar = useRef(null);
    const refProgress = useRef(null);
    const refVolumeBar = useRef(null);

    useEffect(() => {
        console.log("정보 전송 , 최소")
        setProgress(refEstimatedTime, refFinishTime, refProgress, refProgressBar)
    }, [])

    return (
        <Fragment>
            {/* 볼륨 슬라이더 */}
            <section style={{ display: "none" }}>
                <input type="range" id="volumeSlider" min="0" max="1" step="0.01" value="1" onClick={() => setVolume(refVolumeBar)} ref={refVolumeBar}/>
            </section>
            {/* 볼륨 슬라이더 END */}

            {/* 음악 진행률 */}
            <section className="progress" onClick={() => setProgress(refEstimatedTime, refFinishTime, refProgress, refProgressBar)} ref={refProgress}>
                <div className="bar" ref={refProgressBar}></div>
            </section>
            {/* 음악 진행률 END */}

            {/* 음악 정보 */}
            <section className="info">
                <div>
                    <p className="desc"><img src="/images/icon/ico-deco-lightning.svg" alt="/" /><i>now playing.</i></p>
                    <h2 className="title">{currentTrack.title}</h2>
                </div>
                <p className="artist">{currentTrack.subtitle}</p>
            </section>
            {/* 음악 정보 END */}

            {/* 재생/다음/이전/숨김&보임 버튼 */}
            <section className="action">
                <section className="playtime">
                    <span className="estimated" ref={refEstimatedTime}>00:00</span>
                    <span className="finished" ref={refFinishTime}>03:50</span>
                </section>
                <section className="buttons">
                    <button type="button"><img src="/images/icon/ico-common-prev.svg" alt="이전 곡" onClick={() => utilPlayer.setCurrentTrack(trackList, "prev")} /></button>
                    <button type="button" onClick={() => {
                            setState();
                            setPlayState();
                        }}>
                        <img src={`/images/icon/ico-common-${isPlaying ? "playonplayer" : "pause"}.svg`} alt="재생" />
                    </button>
                    <button type="button"><img src="/images/icon/ico-common-next.svg" alt="다음 곡" onClick={() => utilPlayer.setCurrentTrack(trackList, "next")} /></button>
                    <button type="button" onClick={() => setExpandPlayer()}><img src="/images/icon/ico-common-show.svg" alt="플레이어 보기" /></button>
                </section>
            </section>
            {/* 재생/다음/이전/숨김&보임 버튼 END */}
        </Fragment>
    )
}

// 플레이어 : 최대화
const MaximizeComponents = ({
        trackList,
        currentTrack,
        currentTrackIndex
    }) => {

    useEffect(() => {
        console.log("정보 전송 , 최대")
    }, [])

    return (
        <Fragment>
            {/* 음악 정보 */}
            <Article id={"zonePlay"}>
                {/* 앨범 아트 */}
                <section className="albumart">
                    <p className="desc">
                        <img src="/images/icon/ico-deco-lightning.svg" alt="/" />
                        <i>now playing.</i>
                    </p>

                    <div className="container-image">
                        <img src={`${currentTrack.images.coverart}`} alt="/" loading="lazy" />
                    </div>

                    <div className="backdrop">
                        <img src={`${currentTrack.images.coverart}`} alt="/" loading="lazy"/>
                    </div>
                </section>
                {/* 앨범 아트 END */}
            </Article>
            {/* 음악 정보 END */}

            {/* 음악 리스트 */}
            <Article id={"zoneList"}>
                <h5>내 현재 플레이리스트</h5>
                <section className="list">
                    {trackList.map((e, i) => 
                        <div className={`item ${currentTrackIndex == i ? "active" : ""}`} key={i}>
                            <article className="album-art">
                                <img src={`${e.songId.images.coverart}`} alt="/" />
                                <button type="button" onClick={() => utilPlayer.setCurrentTrack([e], "current", i)}>
                                    <img src="/images/icon/ico-common-playonplayer.svg" alt="재생" />
                                </button>
                            </article>
                            <article className="desc">
                                <section className="info">
                                    <h6>{e.songId.title}</h6>
                                    <p>{e.songId.subtitle}</p>
                                </section>
                                <section className="action">
                                    <button type="button" onClick={() => utilPlayer.deleteItemOnTrackList(trackList, e._id)}>
                                        <img src="/images/icon/ico-common-close.svg" alt="지우기" />
                                    </button>
                                    {/* <button type="button" onClick={() => utilPlayer.setCurrentTrack([e], "current", i)}>
                                        <img src="/images/icon/ico-common-playonplayer.svg" alt="재생" />
                                    </button> */}
                                </section>
                            </article>
                        </div>
                    )}
                </section>
            </Article>
            {/* 음악 리스트 END */}
        </Fragment>
    )
}

export default PlayerComponents