import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './Pages/Home';
import BookPage from './Pages/BookPage'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} exact path="/" />
            <Route component={BookPage} path="/book/:id" />
            
        </BrowserRouter>
    )
         
}

export default Routes;