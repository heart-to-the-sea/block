import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import 'antd/dist/antd.css'
import App from './pages/home/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);
