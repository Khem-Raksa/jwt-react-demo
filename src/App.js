import React, { } from 'react';
import './App.css';
 
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
 
import Login from './components/Login.js'
import Profile from './components/Profile.js'
import {RequireToken} from './components/Auth.js'
 
function App() {
  return (
    <div className='main'>
    <div className="vh-100 gradient-custom">
    <div className="container">
      <h1 className="page-header text-center">React - FastAPI - Authentication with PyJWT Demo</h1>
  
      <BrowserRouter>  
        <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/profile"
              element={
                <RequireToken>
                  <Profile/>
                </RequireToken>
              }
            />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
    </div>
  );
}
  
export default App;