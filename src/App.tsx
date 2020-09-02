import React from 'react';

import Global from './styles/global'

import Header from './components/Header'
import BookView from './components/BookView' 

function App() {
  return (
    <div className="App">
     <Global />
     <Header />
     <BookView />
    </div>
  );
}

export default App;
