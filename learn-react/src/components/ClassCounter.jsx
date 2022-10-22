/* 
    클래스형 컴포넌트
        - 클래스 문법에 맞춰 작성하는 컴포넌트.
        - 원래 함수형 컴포넌트에서 상태값 관리와 생명주기에 따른 처리가 안돼서 주로 사용했다.
        - React.Component를 상속받아야한다.
        - render()에 jsx를 반환해야한다.
        - this.props로 전달받은 프로퍼티를 참조할 수 있다.
*/

import { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrese = this.onDecrese.bind(this);

    this.state = {
      count: this.props.initCount,
    };
  }

  onIncrease() {
    this.setState({ count: this.state.count + 1 });
  }

  onDecrese() {
    this.setState({ count: this.state.count - 1 });
  }

  componentDidMount() {
    // 초기값 설정, API 통신 초기 데이터 받아오기, 라이브러리 연동
    console.log("component : mount");
  }

  componentDidUpdate() {
    // 상태값이나 전달받고 있는 props가 변경되었을 때 실행
    // 특정값이 변했을 때 실행할 것들
    console.log("component : update");
  }

  componentWillUnmount() {
    // 뒷정리할 때 사용
    console.log("component : unmount");
  }

  render() {
    console.log("component : render");

    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onIncrease}>+1</button>
        <button onClick={this.onDecrese}>-1</button>
      </>
    );
  }
}

export default ClassCounter;
