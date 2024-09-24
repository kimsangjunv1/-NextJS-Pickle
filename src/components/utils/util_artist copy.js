import usePlayerStore from "@/store/playerStore";
import util from "@/api/util";

const utilArtist = {

    // 설명 : 검색된 플레이스트의 속 아티스트를 검색하기 위한 songId만 반환해줌
    // 필수 : 플레이리스트 정보
    getMainArtistList: ( props ) => {
        const mappingData = props.flatMap(e => e.list).map(id => id.songId);
        const final = [...new Set(mappingData)];

        let testList = props.flatMap(e => e.list);

        let uniqueList = testList.filter((value, index, self) => {
            // self는 filter로 처리 중인 배열(testList)
            return self.findIndex(item => item.adamid === value.adamid) === index;
        });

        console.log("ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇ",uniqueList);

        const convertData = (target) => {
            let mappingData = [];
    
            if(target.length){
                for (let i=0; i<10; i++) {
                    let rand = util.getRandomNum(target.length - 1);
                    mappingData.push(target[rand]);
                }
            }
    
            console.log("완료 : ",mappingData)
            return mappingData;
        }

        return convertData(final);
        // return props.flatMap(e => e.list).map(id => id.songId).filter((e, i) => i <= 9)
    },

    getSongAdamid: ( props ) => {
        return props.flatMap(e => e.artists).map(key => key.adamid);
    },

    getArtistAlbumId: ( props ) => {
        const setArtistId = ( target ) => {
            return target.flatMap(e => 
                e.albums.map(album => ({
                    ...album,            // album의 모든 속성을 유지
                    artistId: e.artists[0].id // artistId라는 키에 e.artists.id 추가
                }))
            )
        }

        return setArtistId(props).filter(e => e.type == "albums");
    },

    // 설명 : 아티스트 정보를 저장하기 위한 파라미터를 가공해줌
    // 필수 : 아티스트 정보
    getArtistParameter: ( props ) => {
        let parameter = {};
        let object = [];
        let targetKeys = Object.keys(props.resources);

        for (let i = 0; i<= targetKeys.length - 1; i++) {
            for (const [key, value] of Object.entries(props.resources[targetKeys[i]])) {
                object = [...object, value];
            }

            parameter[targetKeys[i]] = object;
        }

        parameter.albums.map(data => { data.relationships && delete data.relationships });
        parameter.artists.map(data => { data.views["top-songs"] && delete data.views["top-songs"] });

        return parameter;
    }
};

export default utilArtist;