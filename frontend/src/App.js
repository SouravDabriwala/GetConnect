import './App.css';
import { Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Users from './modules/Users/components/Users';
import Chat from './modules/Chat/components/Chat';
import SignUp from './modules/Signup/components/SignUp';
import MainHome from "./modules/MainHome/MainHome"
import Login from './modules/Login/Login';
// const Users = React.lazy(() => import("./modules/Users/components/Users"))




function App() {
  return (
    <div className="App">


      <Provider store={store}>
        <Routes>
          <Route path='/chat' element={<Chat />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<MainHome />} />
        </Routes>
      </Provider>


    </div>
  );
}

export default App;
