import React  from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import J from './J/J.js';
import K from './K/K.js';
import U from './U/U.js';
import Home from './home.js';

function App () {
    return (
        <>
        <BrowserRouter>
            <Route path='/' component={Home} />
            <Route path='/k' component={K} />
            <Route path='/j' component={J} />
            <Route path='/u' component={U} />
        </BrowserRouter>
        </>
    )
  }
export default App;