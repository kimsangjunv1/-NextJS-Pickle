// 라이프 사이클
import React, { Fragment, useEffect } from "react";
import { useRouter } from "next/router";

import usePlayerStore from "@/store/playerStore";

// 기본 구조
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Seo from "./Seo";
import PlayerComponents from "@/components/common/PlayerComponents";

import util from "@/api/util";

const BaseLayout = ({ children, title, description, currentPage, isScrolled }) => {
    const router = useRouter();

    const { 
        isPlaying, isNeedSizeMax, currentTrack, trackList,
        setIsPlaying, setPlayerSize, setCurrentTrack
    } = usePlayerStore((state) => state);

    return (
        <Fragment>
            {/* SEO 관리 */}
            <Seo title={title} description={description} />
            {/* SEO 관리 END */}

            {/* 헤더 */}
            <Header currentPage={currentPage} isScrolled={isScrolled} />
            {/* 헤더 END */}

            {/* 메인 */}
            <Main
                className={`${router.route.replace("/","") !== "home" ? "sub" : ""} page-${router.route.split('/')[1]}`}
            >
                {/* 모든 페이지 별 내용 */}
                <section className="main-inner">{children}</section>
                {/* 모든 페이지 별 내용 END */}

                {/* 플레이어 */}
                {trackList.length && <PlayerComponents />}
                {/* 플레이어 */}
            </Main>
            {/* 메인 END */}

            {/* 푸터 */}
            <Footer/>
            {/* 푸터 END */}
        </Fragment>
    );
};

export default BaseLayout;
