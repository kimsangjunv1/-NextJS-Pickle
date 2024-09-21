import { useEffect, useState } from "react";
import YahooApi from "@/api/other/yahoo_api";

const useWeather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiYahoo= new YahooApi();

    useEffect(() => {
        const loadWeatherData = async () => {
            const storedData = sessionStorage.getItem("data_weather");
            const storedTimestamp = sessionStorage.getItem("weather_timestamp");
            const now = new Date().getTime();
            const oneDayInMillis = 24 * 60 * 60 * 1000;

            if (storedData && storedTimestamp) {
                const isExpired = now - parseInt(storedTimestamp, 10) > oneDayInMillis;

                if (!isExpired) {
                    setWeatherData(JSON.parse(storedData));
                    setLoading(false);
                    return; // 데이터가 유효하므로 API 호출을 생략
                }
            }

            // 데이터가 없거나 만료된 경우 API 호출
            try {
                const data = await apiYahoo.getWeatherData();
                setWeatherData(data);
                sessionStorage.setItem("data_weather", JSON.stringify(data));
                sessionStorage.setItem("weather_timestamp", now.toString()); // 타임스탬프 갱신
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadWeatherData();
    }, []);

    return { weatherData, loading, error };
};

export default useWeather;