// 리액트 라이프 사이클 함수
import React from "react";

// - 컴포넌트 매개변수 설명 -
// children : children으로 상속 받은 값
// id : 할당할 id가 담긴 값
// classname : 할당할 class명이 담긴 값
// isScrolled : 스크롤 여부에 따라 제어하기 위해 header태그에 사용중

const Section = ({ children, id, classname }) => {
    return (
        <section
            id={id && `${id}`}
            className={classname && `${classname}`}
        >
            {children}
        </section>
    );
};

export default Section;
