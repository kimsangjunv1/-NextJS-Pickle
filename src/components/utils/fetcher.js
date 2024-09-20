// Fetcher 함수 정의
import YahooApi from "@/api/other/yahoo_api";
import useSWR from "swr";

// YahooApi 인스턴스 생성
const yahooApi = new YahooApi();

// Fetcher 함수
export const fetcherYahoo = async () => {
  return await yahooApi.getWeatherData();
};

// export const fetcherShazam = async () => {
//     return await shazam.getMusicData();
// };