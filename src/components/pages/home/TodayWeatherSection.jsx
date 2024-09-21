import React, { useState, useEffect, Fragment } from "react";

import Article from "@/components/layout/Article";
import SkeletonComponents from "@/components/common/SkeletonComponents";
import TitleComponents from "@/components/common/TitleComponents";

const TodayWeatherSection = ({ DBWeatherImage }) => {
    console.log("전달받음", DBWeatherImage.data[0].attributes.image.medium)
    return (
        <Article id={"image"}>
            <div style={{ backgroundImage: `url(${DBWeatherImage.data[3].attributes.image.large})` }}></div>
        </Article>
    )
}

export default TodayWeatherSection