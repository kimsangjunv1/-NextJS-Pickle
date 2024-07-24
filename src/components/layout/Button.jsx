import React, { useEffect, useRef } from "react";

const Button = ({
  padding,
  margin,
  background,
  color,
  border,
  text,
  onClick,
}) => {
  const agreeElement = useRef(null);

  useEffect(() => {
    if (onClick) {
      // 동의 했을때
      agreeElement.current.addEventListener("click", (e) => {
        e.stopPropagation();
        onClick();
      });
    }
  }, []);

  return (
    <button
      id="btn"
      style={{ padding, margin, background, color, border }}
      ref={agreeElement}
    >
      {text ? text : "확인"}
    </button>
  );
};

export default Button;
