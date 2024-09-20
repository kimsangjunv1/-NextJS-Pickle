import ApiYahoo from "../api_yahoo";
import util from "../util";

export default class YahooApi extends ApiYahoo {

  async getWeatherData() {
    let test = {
      location: 'seoul',
      format: 'json',
      u: 'f'
    }
    const res = await super.get("/weather", test);

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }
}
