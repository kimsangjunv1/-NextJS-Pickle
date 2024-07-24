import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import imagesLoaded from "imagesloaded";

const useRouteLoading = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadingCount, setLoadingCount] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const handleRouteChangeStart = () => {
            setIsLoaded(false);
            setLoadingCount(0); // 로딩 시작 시 진행률 초기화
        };

        // 로딩 진행률 업데이트 함수
        let imgLoaded = 0,
            current = 0;
        const imgLoad = imagesLoaded("body");
        const imgTotal = imgLoad.images.length;
        const updateProgress = () => {
            let target = (imgLoaded / imgTotal) * 100;
            current += (target - current) * 0.1;
            setLoadingCount(`${Math.floor(current)}%`);

            if (current > 99.9) {
                current = 100;

                setTimeout(() => {
                    setIsLoaded(true);
                    setLoadingCount(0);
                }, 500);
                clearInterval(progressTimer); // 타이머 정리
            }
        };

        // 진행률 업데이트 타이머 설정
        const progressTimer = setInterval(updateProgress, 2000 / 60);

        imgLoad.on("progress", () => {
            imgLoaded++;
        });

        router.events.on("routeChangeStart", handleRouteChangeStart);

        return () => {
            router.events.off("routeChangeStart", handleRouteChangeStart);
            clearInterval(progressTimer); // 컴포넌트 언마운트 시 타이머 정리
        };
    }, [router]);

    return { isLoaded, loadingCount };
};

export default useRouteLoading;
