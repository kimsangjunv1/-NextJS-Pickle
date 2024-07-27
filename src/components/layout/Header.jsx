import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="header-inner">
                {/* 메뉴 리스트 */}
                <section className="list-menu">
                    <Link href="/home">
                        <img src="/images/common/img-logo-brand.svg" alt="픽클" />
                    </Link>
                    <div>
                        <Link href="/playlist">플레이리스트</Link>
                        <Link href="/artist">아티스트</Link>
                        <Link href="/album">앨범</Link>
                        <Link href="/weather">오늘 날씨</Link>
                    </div>
                </section>
                {/* 메뉴 리스트 END */}

                {/* 사용자 액션 리스트 */}
                <section className="list-action">
                    {/* <Link href="/">로그인</Link> */}
                    {/* <Link href="/">오늘 내가 재생한 곡</Link> */}
                </section>
                {/* 사용자 액션 리스트 END */}

                {/* <Link href="/studySWR">공부</Link>
                <Link href="/test">테스트</Link> */}
            </div>
        </header>
    )
}

export default Header