import React from 'react';
import ReactDOM from 'react-dom/client';
import Context from './Context/Context';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
    
  </React.StrictMode>
);


