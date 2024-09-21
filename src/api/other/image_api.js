import ApiImage from "../api_Image";
import util from "../util";

export default class ImageApi extends ApiImage {

  async getSearchResult(keyword) {
    console.log("들어온 값 ", keyword)
    const test = {
        type: 'photo',
        query: keyword,
        size: 'large',
        orientation: 'landscape',
      }
    const res = await super.post("api/search", test);

    console.log("결과 : ", res)
    
    if (util.checkResult(res)) {
      return res.data.results;
    } else {
      util.handleFailedMsg(res);
    }
  }
}
