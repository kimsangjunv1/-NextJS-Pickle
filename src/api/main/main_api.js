import ApiPickle from "../api_pickle";
import util from "../util";

export default class MainApi extends ApiPickle {
  // 음악
  // 목록
  async getSongList() {
    const res = await super.get("/tracks/get");

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }

  // 생성
  async setSongRegister(params) {
    const res = await super.post("/tracks/post", params);

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }

  // 조회
  async getSongSearchList(params) {
    const res = await super.post("/tracks/findByIds", {ids: params});

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }
  
  // 플레이리스트
  // 목록
  async getPlayList() {
    const res = await super.get("/playlist/get");

    if (util.checkResult(res)) {
      return res.data;
    } else {
      // 실패 시 기본값을 반환하거나 에러 처리
      util.handleFailedMsg(res);
      // return [];  // 빈 배열 또는 기본 객체를 반환
    }
  }

  // 생성
  async createPlayList(params) {
    const res = await super.post("/playlist/create", params);

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }

  // 조회
  async analyzePlayList(params) {
    const res = await super.get(`/playlist/${params}`);

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }

  // 아티스트
  // 목록
  async getArtistList() {
    const res = await super.get(`/artist/get`);

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }

  // 생성
  async createArtistList(params) {
    const res = await super.post(`/artist/post`, params);

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }

  // 조회
  async getArtistSearchList(params) {
    const res = await super.get(`/artist/${params}`);

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }

  // 다량 조회
  async getMultipleArtists(params) {
    const res = await super.post("/artist/findByIds", {id: params});

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }

  // 앨범
  // 목록
  async getAlbumList() {
    const res = await super.get(`/album/get`);

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }

  // 생성
  async createAlbumList(params) {
    const res = await super.post(`/album/post`, params);

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }

  // 조회
  async getAlbumSearchList(params) {
    const res = await super.get(`/album/${params}`);

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }

  // 다량 조회
  async getMultipleAlbum(params) {
    const res = await super.post("/album/findByIds", {id: params});

    if (util.checkResult(res)) {
      return res.data;
    } else {
      util.handleFailedMsg(res);
    }
  }
}
