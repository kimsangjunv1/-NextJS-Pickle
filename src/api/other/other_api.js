import Api from "../api";
import util from "../util";

export default class OtherApi extends Api {

  async getRapidSearchData({ inputValue, pageNum }) {
    const test = {
      "term" : inputValue,
      "locale" : "ko-KR",
      "offset" : 4 * pageNum,
      "limit" : 5
    }
    const res = await super.get("/search", test);

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }

  async getArtistDetail(params) {
    const test = {
      "id" : params,
      "l" : "ko-KR"
    }
    const res = await super.get("/artists/get-summary", test);

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }
}
