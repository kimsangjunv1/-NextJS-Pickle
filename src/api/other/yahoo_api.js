import ApiYahoo from "../api_yahoo";
import util from "../util";

export default class YahooApi extends ApiYahoo {

  async getWeatherData() {
    let options = {
      location: 'seoul',
      format: 'json',
      u: 'f'
    }
    const res = await super.get("/weather", options);

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }
}
