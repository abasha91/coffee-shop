import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvidor } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.constext';
import { CartProvidor } from './contexts/cart.context';

import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvidor>
        <CategoriesProvider>
          <CartProvidor>
            <App />
          </CartProvidor>
        </CategoriesProvider>

      </UserProvidor>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
