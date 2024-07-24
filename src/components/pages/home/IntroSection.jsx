import React, { useState, useEffect, Fragment } from "react";
import Article from "@/components/layout/Article";

const IntroSection = ({ DBPlaylist }) => {
    const [ test, setTest ] = useState([]);

    useEffect(() => {
        setTest(DBPlaylist.filter((e, i) => i == 6));
    }, [DBPlaylist])
    return (
        <Article id={"intro"}>
            {test.map((e, i) => 
                <ItemComponents desc={ e.desc } keywords={ e.keywords } list={ e.list } title={ e.title } key={ i } />
            )}
        </Article>
    )
}

const ItemComponents = ({ desc, keywords, list, title }) => {
    console.log("desc : ", desc);
    console.log("keywords : ", keywords);
    console.log("list : ", list);
    console.log("title : ", title);
    
    return (
        // <div className="item" style={{ backgroundImage: `url(${list[0].albumImage})` }}>
        <div className="item">
            <div className="info">
                <p>오늘 새로 추가되었어요!</p>
                <h5>{title}</h5>
                <p>{desc}</p>
                <button type="button">+ 재생 목록에 추가</button>
            </div>

            <img src={list[0].albumImage} alt="/" className="backdrop" />
            <img src={list[0].albumImage} alt="/" className="albumart" />=
        </div>
    )
}

export default IntroSection