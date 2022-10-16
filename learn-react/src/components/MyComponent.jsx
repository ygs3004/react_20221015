import React from "react";

// 함수형 컴포넌트
function MyComponent({ active, title }) {
  //active가 true인 경우 빨간색으로
  return (
    <div style={{ color: active && "red" }}>
      {active && <b>active</b>}Hello {title}
    </div>
  );
}

MyComponent.defaultProps = { title: "React", color: "green" };

export default MyComponent;
