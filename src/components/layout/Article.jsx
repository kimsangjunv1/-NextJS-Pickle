// 리액트 라이프 사이클 함수
import React from "react";

// - 컴포넌트 매개변수 설명 -
// id,classname의 존재 여부에 따라 id 혹은 classname을 추가할건지 결정함
// children으로 내용 상속받음

const Article = ({ children, id, classname }) => {
    return (
        <article id={id && `${id}`} className={classname && `${classname}`}>
            {children}
        </article>
    );
};

export default Article;
