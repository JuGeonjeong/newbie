import { Component } from 'react/cjs/react.production.min';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    // state을 조회할 때는 this.state로 조회 합니다.
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h1>바뀌지 않는 값: {fixedNumber}</h1>
        <button
          //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('방금 state호출이 끝났습니다.');
                console.log(this.state);
              }
            );
          }}
          // 위 코드와 아래 코드는 완전히 똑같은 기능
          //아래 코드는 함수에서 바로 객체를 반환하는 의미
          //     this.setState((prevState) => ({
          //       number: prevState.number + 1,
          //     }));
          //   }}
        >
          + 1
        </button>
      </div>
    );
  }
}
export default Counter;
