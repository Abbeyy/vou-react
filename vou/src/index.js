import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
// import vouStore from './js/store/index';
import vouStore from './js/index';

const render = () => ReactDOM.render(
    <Provider store={vouStore}>
    <App />
  </Provider>, document.getElementById('root'));
  
render();
vouStore.subscribe(render);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();