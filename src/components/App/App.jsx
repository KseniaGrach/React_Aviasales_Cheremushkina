import React from 'react';

import './App.scss';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Main from '../Main';

const App = () => (
  <div className="app">
    <Header />
    <Sidebar />
    <Main />
  </div>
);

export default App;
