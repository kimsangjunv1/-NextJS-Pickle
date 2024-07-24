import Api from "./api";
import util from "./util";

import useSWR from "swr";

export default class TestApi extends Api {
  async getTestData() {
    const res = await super.get("products/1");

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }

  async getRapidChartListData() {
    const res = await super.get("/charts/list");

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
