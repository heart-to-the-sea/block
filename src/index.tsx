import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import 'antd/dist/antd.css'
import Layouts from './layout';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Layouts/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);
