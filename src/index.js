import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import '../node_modules/normalize.css'
import { BrowserRouter } from 'react-router-dom';
import { initClickTracking } from './utils/trackClicks';

initClickTracking();

ReactDOM.render(
  <React.StrictMode>

<BrowserRouter>
<App />
</BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

