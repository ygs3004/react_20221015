import React from "react";

// 함수형 컴포넌트
function MyComponent({ active, title }) {
  // active가 true인 경우 빨간색으로 바꿔보기
  return (
    <div style={{ color: active && "red" }}>
      {active && <b>active</b>} Hello {title}
    </div>
  );
}

// 전달된 props가 없을 때 적용할 기본 props
MyComponent.defaultProps = {
  title: "React!",
  color: "green",
};

export default MyComponent;
