import Api from "../api";
import util from "../util";

export default class OtherApi extends Api {

  async getRapidSearchData({ inputValue, pageNum }) {
    console.log(`검색 : ${inputValue}, ${pageNum}페이지 `);
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
    console.log("아티스트 정보를 Shazam 에서 찾습니다", params)
    const test = {
      "id" : params,
      "l" : "ko-KR"
    }
    const res = await super.get("/artists/get-summary", test);

    console.log("찾긴 한거야 ? :", res)

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }
}
