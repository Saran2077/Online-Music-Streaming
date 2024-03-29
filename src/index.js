import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import Login from './Components/Login/Login';
import SignIn from './Components/Login/SignIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='login' element={<Login />} />
      <Route path='signin' element={<SignIn />} />
    </Routes>
   </BrowserRouter>
  </React.StrictMode>
);


