import ApiImage from "../api_stock_image";
import util from "../util";

export default class ImageApi extends ApiImage {

  async getSearchResult(keyword) {
    const options = {
        type: 'photo',
        query: keyword,
        size: 'large',
        orientation: 'landscape',
      }
    const res = await super.post("api/search", options);
    
    if (util.checkResult(res)) {
      return res.data.results;
    } else {
      util.handleFailedMsg(res);
    }
  }
}
