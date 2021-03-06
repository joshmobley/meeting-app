import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';

import Header from './Header';

import Routes from './Routes';


const App = () => {


return (
  <Provider store={ store }>
    <Header />
    <Routes />
  </Provider>
)
}

export default App;