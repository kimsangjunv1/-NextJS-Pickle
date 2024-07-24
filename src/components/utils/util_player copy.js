import usePlayerStore from "@/store/playerStore";

const utilPlayer = {
    setPlaying: (element, state) => {
        const audio = element.current;
        console.log("재생 실행",state , audio)
        // console.log(usePlayerStore.getState().isPlaying)

        // const isPlaying = usePlayerStore.getState().isPlaying;
        // const setIsPlaying = usePlayerStore.getState().setIsPlaying;

        // setIsPlaying(!isPlaying);

        state ? audio.play() : audio.pause();
    },

    setPlayerSize: (props) => {
        console.log("사이즈 실행")

        const isNeedSizeMax = usePlayerStore.getState().isNeedSizeMax;
        const setPlayerSize = usePlayerStore.getState().setPlayerSize;

        setPlayerSize(!isNeedSizeMax)
    },

    setCurrentTrack: (props) => {
        console.log("트랙 추가 실행", props)

        const setCurrentTrack = usePlayerStore.getState().setCurrentTrack;

        setCurrentTrack(props)
    },

    setProgress: ({e, i, k, j, refAudio}) => {
        const timeEstimated = e?.current;
        const timeFinish = i?.current;
        const progress = k.current;
        const progressBar = j.current;
        const audio = refAudio.current;

        console.log("이게 오네 :", timeEstimated, timeFinish, progress, progressBar, refAudio);
        
        progress?.addEventListener("click", (e) => {
            console.log("실행");
            let progressWidth = progress.clientWidth //진행바 전체 길이
            let clickedOffsetx = e.offsetX //진행바 기준으로 측정되는 X좌표
            let duration = audio.duration //오디오 전체 길이

            audio.currentTime = (clickedOffsetx / progressWidth) * duration //백분위로 나눈 숫자에 다시 전체 길이를 곱해서 현재 재생값으로 바꿈
        })

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
            }
        })
    }
};

export default utilPlayer;