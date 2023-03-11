import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//TODO mee uda eken ganna id ekata (line 8 id ekata) render karanawa root eliment eka
// metana wennet append karanawa wage ekak tamai

//meeken karanne development waladi warnings eheme ena ewa show karanawa
root.render(
  <React.StrictMode>
    {/* app kiyana component eka tamai mulu folder ekatama root eka */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
