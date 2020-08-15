import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Game from './components/Game';
import CountContainer from './components/CountContainer'
// import TodoList from './components/TodoList';
// import store from './components/TodoStore';

ReactDOM.render(
  (
    <div>
      <h1>Reactチュートリアル</h1>
      <h2>○×ゲーム：hooks + TypeScript</h2>
      <Game />
      <br />
      <h2>カウンター：mobx</h2>
      <CountContainer />
    </div>
  ),
  document.getElementById('root')
);
