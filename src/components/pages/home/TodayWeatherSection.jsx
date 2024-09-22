import React, { useState, useEffect, Fragment } from "react";

import Article from "@/components/layout/Article";
import SkeletonComponents from "@/components/common/SkeletonComponents";

const TodayWeatherSection = ({ DBWeatherImage }) => {
    return (
        <Article id={"image"}>
            <div style={{ backgroundImage: `url(${DBWeatherImage?.data[0]?.attributes?.image?.large})` }}></div>
        </Article>
    )
}

export default TodayWeatherSection