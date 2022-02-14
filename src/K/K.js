import { Component } from "react";
import Mycomponent from "./component/Mycomponent";
import Counter from "./component/Counter";
import Say from "./component/Say";
import FEventPractice from "./component/FEventPractice";

class App2 extends Component {
  const = "리액트";
  render() {
    return <FEventPractice />;
  }
}

// function App2({ history }) {
//   const name = '리액트';
//   const number = 0;

//   return (
//     <>
//       <div>git branch 생성</div>
//       <div>commit 실헝</div>
//       <div>{number && <h1>{name}</h1>}</div>
//       //ㅇㄴㄹㅁㄴㅇㄹㅁㄴㅁㄹㄹㅁㄹ
//       <input></input>
//     </>
//   );
// }

export default App2;
// //JSX 지켜야할 요소
// 1. 부모 요소 하나로 감싸야한다.
// --> 감싸는 이유 DOM에서 컴포넌트 변화를 감지해 낼때 효율적인 비교를 위해
// 그리고 컴포넌트 내부에는 하나의 DOM 트리구조로 이루어져야 한다는 규칙
// 2. JS표현식을 사용하기 위해서는 코드 {} 감싸면 됨
// 3. var는 scope가 함수단위, let,const는 블록단위
// 4. class가 아닌 className
// 5. 태그를 꼭 닫아야 한다.
