import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);//component에 state 설정 시 constructor메소드 작성
        this.state = {//state초기값 설정
            number: 0,
            fixedNumber: 0
        };
    }
    render() {
        const { number,fixedNumber } = this.state;//this.state : 현재 state조회 
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                    onClick={()=> {
                        //this.setState : state에 비동기식으로 state변경
                        //this.setState({ number: number+1 });
                        //this.setState({ number: this.state.number+1 });
                        // this.setState(prevState => {//prevState : 기존 상태, props : 현재지니고 있는 props
                        //     return {
                        //         number: prevState.number + 1
                        //     };
                        // });
                        // this.setState(prevState => ({//({ }) : 화살표함수에서 바로 객체 반환 시 사용
                        //     number: prevState.number + 1
                        // }))
                        this.setState(
                            { number: number+1 },
                            //setState의 두번째 파라미터 callback함수
                            () => {
                                console.log('방금 setState가 호출되었습니다.');
                                console.log(this.state);
                            }
                        )
                    }}
                >
                +1
                </button>
            </div>
        )
    }
}

export default Counter;