import CounterPunch from "./component/counterPunch";
import MyComponent from "./component/MyComponent";
import { BrowserRouter, Route } from 'react-router-dom';

function Index () {
    return (
        <>
        <BrowserRouter>
            <Route path='/j/conter' component={CounterPunch} />
            {/* <Route path='/j/my' component={MyComponent} /> */}
        </BrowserRouter>
        </>
      )
}

export default Index;