import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './Components/layout/SearchBar';
import Logs from './Components/logs/Logs';
import AddBtn from './Components/layout/AddBtn';
import AddLogModal from './Components/logs/AddLogModal';
import EditLogModal from './Components/logs/EditLogModal';
import AddTechModal from './Components/Techs/AddTechModal';
import TechsListModal from './Components/Techs/TechsListModal';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

const App = () => {
  useEffect(() => {
    //Init Materialize js
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechsListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;

/*
cara gunakana materialize-css
1.install npm i materialize-css
2.import dari node_modules materialize tsb

3. mlakuakn init sbab akan gunakan component Materialize, yg didalamnya ada builtin JS

jangan lupa install juga material oiconsnya
https://google.github.io/material-design-icons/


*/
