import usePlayerStore from "@/store/playerStore";

const utilPlayer = {
    // 함수 : 재생 상태 세팅
    setPlayState: () => {
        const isPlaying = usePlayerStore.getState().isPlaying;
        const setIsPlaying = usePlayerStore.getState().setIsPlaying;
        
        setIsPlaying(!isPlaying);
    },

    // 함수 : 음원 재생
    setPlaying: (element, state) => {
        const audio = element.current;

        state ? audio.play() : audio.pause();
    },

    // 함수 : 플레이어 사이즈 세팅
    setPlayerSize: (props) => {
        const size = usePlayerStore.getState().setPlayerSize;
        
        size(props >= 1 ? 0 : 1);
    },

    // ★★★★ 안쓰는듯 ★★★★
    // 함수 : 현재 실행할 트랙 세팅
    setCurrentTrack: (props, type, setState) => {
        const setTrack = usePlayerStore.getState().setCurrentTrack;
        const setIndex = usePlayerStore.getState().setCurrentTrackIndex;

        const getIndex = usePlayerStore.getState().currentTrackIndex;
        const trackList = usePlayerStore.getState().trackList;

        const isPlaying = usePlayerStore.getState().isPlaying;
        const setIsPlaying = usePlayerStore.getState().setIsPlaying;
        
        let index = getIndex;

        switch (type) {
            case "current":
                index = 0;

                break;

            case "next":
                if (getIndex !== trackList.length - 1) {
                    index = getIndex + 1;
                    setIsPlaying(!isPlaying);
                }
                
                break;

            case "prev":
                if (getIndex !== 0) {
                    index = getIndex - 1;
                    setIsPlaying(!isPlaying);
                }

                break;
        }

        setIndex(index);
        setTrack(props[index].songId);
    },

    // ★★★★ 위에랑 합칠 수 있을거 같음 ★★★★
    // 함수 : 트랙 리스트 삽입
    addTrackOnList: (props) => {
        const trackList = usePlayerStore.getState().trackList;
        const setTrackList = usePlayerStore.getState().setTrackList;

        const setIndex = usePlayerStore.getState().setCurrentTrackIndex;

        setIndex(trackList.length);

        for(let i = 0; i <= props.length - 1; i++) {
            setTrackList(props[i]);
        }
    },

    // 함수 : 재생 목록에서 삭제
    deleteItemOnTrackList: (props, target) => {
        console.log("first",props,target)
        usePlayerStore.getState().removeTrack(
            props.filter((good) => good._id !== target)
        );

        
    },

    // 함수 : 프로그래스바 작동
    setProgress: ({ e, i, k, j, refAudio, getPlayState }) => {
        const timeEstimated = e?.current;
        const timeFinish = i?.current;
        const progress = k?.current;
        const progressBar = j?.current;
        const audio = refAudio?.current;

        let progressWidth = progress?.clientWidth //진행바 전체 길이
        let duration = audio?.duration //오디오 전체 길이

        // console.log("이게 오네 :", timeEstimated, timeFinish, progress, progressBar, refAudio, getPlayState);

        let isDragging = false;

        const updateCurrentTime = (e) => {
            if (!isDragging) return;

            let clientX;
            if (e.touches) {
                clientX = e.touches[0].clientX;
            } else {
                clientX = e.clientX;
            }

            const rect = progressBar.getBoundingClientRect();
            const offsetX = clientX - rect.left;

            if (offsetX >= 0 && offsetX <= progressWidth) {
                console.log("드래그중", offsetX);
                audio.currentTime = (offsetX / progressWidth) * duration;
            }
        };

        const startDrag = (e) => {
            isDragging = true;
            updateCurrentTime(e);
        };

        const stopDrag = () => {
            isDragging = false;
        };

        progress?.addEventListener("mousedown", startDrag);
        progress?.addEventListener("touchstart", startDrag, { passive: true });

        document.addEventListener("mousemove", updateCurrentTime);
        document.addEventListener("touchmove", updateCurrentTime, { passive: true });

        document.addEventListener("mouseup", stopDrag);
        document.addEventListener("touchend", stopDrag);

        audio?.addEventListener("timeupdate", (e) => {
            const currentTime = e.target.currentTime
            const duration = e.target.duration

            let progressWidth = (currentTime / duration) * 100 //전체 길이에서 현재 진행되는 시간을 백분위로 나눔

            progressBar.style.width = `${progressWidth}%`

            //전체 시간
            if (timeEstimated && timeFinish) {
                audio.addEventListener("loadeddata", () => {
                    let audioDuration = audio.duration
                    let totalMin = Math.floor(audioDuration / 60) //전체 시간을 분단위로 쪼개줌
                    let totalSec = Math.floor(audioDuration % 60) //남은 초를 저장

                    if (totalSec < 10) totalSec = `0${totalSec}` //초가 한 자릿수일때 앞에 0을 붙임

                    timeFinish.textContent = `${totalMin}:${totalSec}` //완성된 시간 문자열을 출력
                })
    
                //진행시간
                let currentMin = Math.floor(currentTime / 60)
                let currentSec = Math.floor(currentTime % 60)

                if (currentSec < 10) currentSec = `0${currentSec}`

                timeEstimated.innerText = `${currentMin}:${currentSec}`

                if (audio.duration == currentTime) {
                    getPlayState();
                }
            }
        })
    },

    // 함수 : 볼륨 컨트롤
    setVolume: ({ e, refAudio }) => {
        const elementVolume = e.current;
        const elementAudio = refAudio.current;

        console.log("나옴 ! :", elementVolume, elementAudio);
        
        elementVolume.addEventListener("input", (e) => {
            console.log("디스 : ",e.target.value);
            elementAudio.volume = e.target.value;
        });
    }
};

export default utilPlayer;