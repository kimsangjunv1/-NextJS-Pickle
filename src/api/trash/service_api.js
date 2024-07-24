import Api from "./api";
import util from "./util";

export default class ServiceApi extends Api {
  async getTestData() {
    const res = await super.get("products/1");

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }

  // 법률서비스 및 사건 상세정보
  // [필수] caseSeq
  async getCaseDetail(caseSeq) {
    const res = await super.get("auth/RESOURCE", {caseSeq});

    const data = res.data;

    if (util.checkResult(data)) {
      return data;
    } else {
      util.handleFailedMsg(data);
    }
  }

  // 소송코칭 메시지 등록
  // [필수] caseSeq, cmnt(메시지)
  async coachingMsg(model) {
    const formData = new FormData();

    formData.append("caseSeq", model.caseSeq);
    formData.append("cmnt", model.cmnt);

    const res = await super.post("/api/v1/legal/coach/msg/add", formData, {
      headers: {"Content-Type": "multipart/form-data"}
    });

    const data = res.data;

    if (util.checkResult(data)) {
      return data.coachingList;
    } else {
      util.handleFailedMsg(data);
    }
  }
}
