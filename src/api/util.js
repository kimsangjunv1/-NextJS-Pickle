const util = {
    browserInfo: () => {
        // 사용중인 브라우저 체크
        const agent = navigator.userAgent.toLowerCase();
        if (agent.indexOf("trident") != -1) {
            return "IE";
        }
        if (agent.indexOf("chrome") != -1) {
            return "chrome";
        }
        if (agent.indexOf("safari") != -1) {
            return "safari";
        }
        if (agent.indexOf("firefox") != -1) {
            return "firefox";
        }
        if (agent.indexOf("edge") != -1) {
            return "edge";
        }
        if (agent.indexOf("opr") != -1) {
            return "opera";
        }
    },

    isWin: () => {
        const agent = navigator.userAgent.toLowerCase();

        // 윈도우인지 검사
        if (navigator.userAgent.indexOf("mac")) {
            return agent.indexOf("win") != -1;
        }
    },

    check64Bit: () => {
        const agent = navigator.userAgent.toLowerCase();

        // 윈도우가 64비트 여부 확인
        if (agent.indexOf("win64") !== -1) {
            return true;
        } else {
            return false;
        }
    },

    checkResult: data => {
        // api 호출 후 서버에서 처리한 결과 !== 통신 결과
        // 1이 정상
        return data.status === 200;
    },

    handleFailedMsg: data => {
        // api 콜 이후 발생 msg
        return data.statusText;
    },

    resultMsg: data => {
        // api 콜 이후 발생 msg
        return data.statusText;
    },

    isArrayEmpty: data => {
        return Object.keys(data).length === 0;
    },

    convertCelcius: data => {
        let test = Math.round((data - 32) * 5 / 9);
        return test;
    },

    getWeatherName: date => {
        let hours = new Date().getHours() // 시
        switch (date) {
            case "Sunny":
                return `${hours <= 18 ? "기분 좋은" : "행복했던"}`

            case "Clear":
                return `${hours <= 18 ? "깨끗한" : "맑았던"}`

            case "Thunderstorms":
                return `${hours <= 18 ? "감성 넘친" : "눈물"}`

            case "Mostly Sunny":
                return `${hours <= 18 ? "눈부신" : "눈부셨던"}`

            case "Showers":
                return `${hours <= 18 ? "술 땡기는" : "비 내린"}`

            case "Cloudy":
                return `${hours <= 18 ? "흐린" : "흐렸던"}`

            case "Partly Cloudy":
                return `${hours <= 18 ? "구름낀" : "구름꼈던"}`

            case "Mostly Clear":
                return `${hours <= 18 ? "기분좋은" : "행복했던"}`

            case "Scattered Showers":
                return `${hours <= 18 ? "소나기 내리는" : "전 땡기던"}`

            default:
                return "힘내요"
        }
    },

    getRandomNum: (value) => {
        return Math.floor(Math.random() * value) + 1;
    },

    filterObject: ({ value, target1, target2 }) => {
        return value.filter((e) => (target1 ? target1 : e) !== target2);
    }
};

export default util;
