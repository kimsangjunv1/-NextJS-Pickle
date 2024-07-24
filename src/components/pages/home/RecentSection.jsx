import React from 'react'

import Article from "@/components/layout/Article";
import TitleComponents from "@/components/common/TitleComponents";

const RecentSection = () => {
  return (
    <Article id={"recent"}>
        <TitleComponents title={"나만의 플레이리스트"} desc={"내가 오늘 추가한 음악들을 모아놨어요!"} />
        <section className="section-recent-container">
            {Array(10).fill(0).map((i, key) => 
                <ItemComponents title={""} artist={""} key={key} />
            )}
        </section>
    </Article>
  )
}

const ItemComponents = ({ title, artist }) => {
    return(
        <figure className="item">
            <img src="/images/common/img-dummy-albumart.png" alt="/" />

            <div className="info">
                <section>
                    <figcaption>늦은 밤 너의 밤 골목길에서</figcaption>
                    <p>악동뮤지션</p>
                </section>
                <section>
                    <button><img src="/images/icon/ico-common-addfolder.svg" alt="재생목록 추가" /></button>
                    <button><img src="/images/icon/ico-common-download.svg" alt="다운로드" /></button>
                    <button><img src="/images/icon/ico-common-play.svg" alt="재생" /></button>
                </section>
            </div>
        </figure>
    )
}
export default RecentSection