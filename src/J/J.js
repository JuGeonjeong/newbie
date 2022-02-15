import { Component } from 'react';
import CounterPunch from './component/counterPunch';
import MyComponent from './component/MyComponent';
import Index from './index';
import { BrowserRouter, Route } from 'react-router-dom';
import Counter from './component/Counter';
import Say from './component/Say';
import EventPractice from './component/EventPractice';
import ScrollBox from './component/ScrollBox';


// class App1 extends Component {
  
//   render() {
//     return <Index/>
//   }
// }

function App1 ({history}) {
  return (
    <>
      {/* <button onClick={() => history.push('/j/counter')}>counter</button> */}
      <Counter/><br/>
      <CounterPunch/><br/>
      <Say/>
      <EventPractice/>
      {/* <ScrollBox/> */}
    </>
  )
}

export default App1;
