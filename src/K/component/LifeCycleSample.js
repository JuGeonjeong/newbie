import { Component } from 'react';
//will 접두사가 붙은 메서드는 어떤 작업을 작동하기전 실행하는 메서드
//Did 접두사가 붙은 메서드는 어떤 작업을 작동한 후 실행되는 메서드
//컴포넌트 발생 요인 props변경, state변경, 부모 컴포넌트 리렌더링
class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };
  myRef = null; //ref를 설정할 부분
  //컴포넌트를 새로 만들때 마다 호출되는 클래스 생성자 메서드
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  //props에 있는 값을 state에 넣을 때 사용하는 메서드
  //props에 변화에 따라 state값에도 변화를 주고 싶을 때 사용
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }
  //컴포넌트가 웹브라우저상에 나타난 후 호출하는 메서드
  componentDidMount() {
    console.log('componentDidMount');
  }
  //컴포넌트가 리렌더링 해야 할지 말지 결정하는 메소드 결과값 boolean
  sholdComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    //숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }
  //컴포넌트가 웹 브라우저 상에서 사라지기 전에 호출하는 메서드
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  //컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메소드
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }
  //컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdata', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상:', snapshot);
    }
  }
  //준비한 UI를 렌더링하는 메서드
  render() {
    console.log('render');

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color:{this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}
export default LifeCycleSample;
