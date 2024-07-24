import ApiPickle from "../api_pickle";
import util from "../util";

export default class TestApi extends ApiPickle {
  async getTestGetData() {
    const res = await super.get("/test/get");

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }

  async getTestPostData(params) {
    console.log("뭐가오지 ? ", params);
    const res = await super.post("/test/post", params);

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }

  async getRapidSearchData(params) {
    const test = {
      "term" : params,
      "locale" : "ko-KR",
      "offset" : 0,
      "limit" : 5
    }
    console.log("params", params, test)
    const res = await super.get("/search", test);

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }
}
