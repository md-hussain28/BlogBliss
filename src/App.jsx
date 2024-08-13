import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth.js'
import {login,logout} from './store/authSlice.js'
import { Header,Footer } from './components/index.js';

const App = () => {
  const [loading,setLoading]=useState(false);
  const dispatch=useDispatch();
  
  useEffect(()=>{
       authService.getCurrentUser()
       .then((userData)=>{
         if(userData){
           dispatch(login({userData}));
         }else{
          dispatch(logout());
         }
       })
       .finally(()=>{setLoading(false)})
  },[])
  
  if(loading){
    return <div>Loading</div>
  }

  return (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-500'>
         <div className='w-full block '>
            <Header/>
            <main>
               {/*Todo : <Outlet>*/}
            </main>
            <Footer/>
         </div>
    </div>
  )
}

export default App
