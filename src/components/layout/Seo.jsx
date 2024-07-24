// Next JS 컴포넌트
import Head from "next/head";

// - 컴포넌트 매개변수 설명 -
// title : 해당 페이지 제목
// description : 해당 페이지 설명

const Seo = ({ title, description }) => {
    return (
        <Head>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE-edge" />

            {/* 반응형 */}
            <meta content="yes" name="apple-mobile-web-app-capable" />
            <meta content="minimum-scale=1.0, width=device-width, maximum-scale=1, user-scalable=no" name="viewport" />

            <meta name="Date" content="2024-01-14T18:33:13+09:00" />
            <meta name="title" content="이솔 스튜디오" />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="이솔 스튜디오" />
            <meta name="keywords" content="이솔 스튜디오," />
            <meta name="description" content={`${description}`} />
            <meta name="language" content="kr" />
            <meta name="publisher" content="이솔 스튜디오" />

            <meta itemProp="name" content="이솔 스튜디오" />
            <meta itemProp="description" content={`${description}`} />

            {/* OG 태그 */}
            <meta property="og:url" content="https://maze.games" />
            <meta property="og:title" content="이솔 스튜디오" />
            <meta property="og:description" content={`${description}`} />
            <meta property="og:site_name" content="이솔 스튜디오" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://maze.games/img/meta/img-og-kakaotalk.jpg" />

            {/* 트위터 태그 */}
            <meta name="twitter:site" content="이솔 스튜디오" />
            <meta name="twitter:url" content="https://maze.games" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="이솔 스튜디오" />
            <meta name="twitter:description" content={`${description}`} />
            <meta name="twitter:image" content="https://maze.games/img/meta/img-og-twitter.jpg" />
            <meta name="twitter:image:width" content="1024" />
            <meta name="twitter:image:height" content="512" />

            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="msapplication-TileImage" content="https://maze.games/img/meta/img-ms-icon.png" />
            <meta name="theme-color" content="#000000" />

            <link rel="amphtml" href="https://maze.games" />
            <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
            <link rel="canonical" href="https://maze.games" />

            <title>{`${title} | 나만의 날씨에 맞는 음악`}</title>
        </Head>
    );
};

export default Seo;
