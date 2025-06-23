import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import '../src/assets/css/swiper-bundle.min.css';
import '../src/assets/css/aos.css';
import '../src/assets/css/remixicon.css';
import '../src/assets/css/flaticon_hinton.css';
import '../src/assets/css/header.css';
import '../src/assets/css/style.css';
import '../src/assets/css/footer.css';
import '../src/assets/css/responsive.css';
import '../src/assets/css/dark-theme.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
