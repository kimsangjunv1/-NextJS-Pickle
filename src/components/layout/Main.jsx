// 리액트 라이프 사이클 함수
import React from "react";

// - 컴포넌트 매개변수 설명 -
// children : 상속 받는 값
// className : class명으로 활용됨
const Main = ({ children, className }) => {
    return (
        <main id="main" className={`${className}`}>
            {children}
        </main>
    );
};

export default Main;
