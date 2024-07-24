import axios from 'axios';

export default class ApiYahoo {
  constructor() {
    const baseURL = process.env.NEXT_PUBLIC_RAPID_YAHOO_URL;
    const baseHOST = process.env.NEXT_PUBLIC_RAPID_YAHOO_HOST;
    const baseKEY = process.env.NEXT_PUBLIC_RAPID_YAHOO_KEY;
    this.baseURL = baseURL;

    this.instance = axios.create({
      baseURL,
      timeout: 180000, // scraping 부분 timeout 처리(일반적인 get은 reload 컴포넌트로 refresh),
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-key": baseKEY,
        "x-rapidapi-host": baseHOST
      },
    });

    // 요청 인터셉터
    this.instance.interceptors.request.use(
      config => {
        // 요청을 보내기 전에 작업 수행
        // 예: 인증 토큰 추가
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
      },
      error => {
        // 요청 오류가 있는 경우 작업 수행
        return Promise.reject(error);
      }
    );

    // 응답 인터셉터
    this.instance.interceptors.response.use(
      response => response,
      error => {
        // 응답 오류가 있는 경우 작업 수행
        return Promise.reject(error);
      }
    );
  }

  async get(url, params) {
    return await this.instance.get(url, {params});
  }

  async post(url, data, config) {
    return await this.instance.post(url, data, config);
  }

  async delete(url, params) {
    return await this.instance.delete(url, {params});
  }
}