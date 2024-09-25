import React, { useState, useEffect, Fragment } from "react";
import util from "@/api/util";

import Article from "@/components/layout/Article";
import SkeletonComponents from "@/components/common/SkeletonComponents";

const TodayWeatherSection = ({ DBWeatherImage, select }) => {
    return (
        <Article id={"image"}>
            <div style={{ backgroundImage: `url(${DBWeatherImage?.data[select]?.attributes?.image?.large})` }}></div>
        </Article>
    )
}

export default TodayWeatherSection