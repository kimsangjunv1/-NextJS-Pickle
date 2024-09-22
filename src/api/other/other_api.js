import Api from "../api";
import util from "../util";

export default class OtherApi extends Api {

  async getRapidSearchData({ inputValue, pageNum }) {
    const options = {
      "term" : inputValue,
      "locale" : "ko-KR",
      "offset" : 4 * pageNum,
      "limit" : 5
    }
    const res = await super.get("/search", options);

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }

  async getArtistDetail(params) {
    const options = {
      "id" : params,
      "l" : "ko-KR"
    }
    const res = await super.get("/artists/get-summary", options);

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }
}
