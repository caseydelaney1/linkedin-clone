import React from 'react';
import { login, logout, selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';

function App() {

  // const user = useSelector(selectUser);

  return (
    <div className="app">

{/* { header} */}
<Header />

{/* {!user ? (<Login />) : ( */}
<div className='app__body'>
  <Sidebar/>
    <Feed/>
  {/* widgets */}
</div>
{/* )} */}
    

    </div>
  );
}

export default App;
