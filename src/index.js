import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import ApiCalling2 from './component/apiCalling2';
// import FetchApi from './component/fetchApi';
// import AddCustomer from './component/addCustomer';
import ApiCalling from './component/apiCalling';
import Product from './component/product';
import ProductPL from './component2/productPL';
import ApiCalling2 from './component/apiCalling2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Product/>
  // <ProductPL/>
  // <ApiCalling/>
  // <ApiCalling2/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
