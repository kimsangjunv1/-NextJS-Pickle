import { useEffect, useState } from "react";
import YahooApi from "@/api/other/yahoo_api";
import ImageApi from "@/api/other/stock_image_api";

const useImage = (keyword) => {
    const [imageData, setImageData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiImage = new ImageApi();

    useEffect(() => {
        // keyword가 없으면 실행하지 않음
        if (!keyword) return;
        
        const loadImageData = async () => {
            const storedData = sessionStorage.getItem("data_image");
            const storedTimestamp = sessionStorage.getItem("image_timestamp");
            const now = new Date().getTime();
            const oneDayInMillis = 24 * 60 * 60 * 1000;

            if (storedData && storedTimestamp) {
                const isExpired = now - parseInt(storedTimestamp, 10) > oneDayInMillis;

                if (!isExpired) {
                    setImageData(JSON.parse(storedData));
                    setLoading(false);
                    return; // 데이터가 유효하므로 API 호출을 생략
                }
            }

            // 데이터가 없거나 만료된 경우 API 호출
            try {
                const data = await apiImage.getSearchResult(keyword);
                setImageData(data);
                sessionStorage.setItem("data_image", JSON.stringify(data));
                sessionStorage.setItem("image_timestamp", now.toString()); // 타임스탬프 갱신
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadImageData();
    }, [keyword]);

    return { imageData, loading, error };
};

export default useImage;