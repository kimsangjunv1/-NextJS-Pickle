import usePlayerStore from "@/store/playerStore";

const utilAlbum = {

    // 설명 : 검색된 플레이스트의 속 아티스트를 검색하기 위한 songId만 반환해줌
    // 필수 : 플레이리스트 정보
    getTest: ( value ) => {
        // good.albumId = target.albums[i].id;
        // good.pathId = target.artists[0].id;
        let test = value.map( target => target.albums );
        
        // test.albumId = value.albums
        // filterData.albumId = target.albums.id;
        // filterData.pathId = target.artists[0].id;
        // let test = value.map((target) => target.albums);
        // return value.map((target) => target.albums);
    },

    // getTest: ( value ) => {
    //     let test = value.map((target) => target.albums);
        
    //     test.albumId = value.albums
    //     // filterData.albumId = target.albums.id;
    //     // filterData.pathId = target.artists[0].id;
    //     // let test = value.map((target) => target.albums);
    //     return value.map((target) => target.albums);
    // },

    // getTest: ( value ) => {
    //     return value.map(target => {
    //         let rand = util.getRandomNum(target.albums.length - 1);
    //         let filterData = target.albums[rand].attributes;

    //         filterData.albumId = target.albums[rand].id;
    //         filterData.pathId = target.artists[0].id;

    //         return filterData;
    //     });
    // },
};

export default utilAlbum;