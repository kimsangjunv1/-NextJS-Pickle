import React from "react";

const ErrorSection = ({ id }) => {
    return (
        <section id={id} className="section">
            <h2>Oooooops!</h2>
            <p>페이지 경로가 맞는지 다시한번 확인 후 접속해주세요 :ㅇ</p>
            <a href="/" className="btn">
                메인으로 이동
            </a>
        </section>
    );
};

export default ErrorSection;
