import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import container from './config/ioc-config';
import { Provider, ChangeNotification } from 'react-inversify';

const changeNotification = new ChangeNotification();

ReactDOM.render(
  <React.StrictMode>
      <Provider container={container} changeNotification={changeNotification}>
        <App title="The GitHub Cards App"/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
