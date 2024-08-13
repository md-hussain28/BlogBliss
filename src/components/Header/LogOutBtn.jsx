import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/config.js';
import { logout } from '../../store/authSlice.js';

const LogOutBtn = () => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout()
            .then(() => {
                dispatch(logout());
            })
            .catch((e) => {
                console.log("Error from LogOutBtn:", e);
            });
    };

    return (
        <button 
            onClick={logoutHandler} 
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-purple-500 rounded-md shadow-md group"
        >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-purple-600 to-blue-600 group-hover:translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-11V5m-3 14a9 9 0 100-18 9 9 0 000 18z"></path>
                </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-purple-600 transition-all duration-300 transform group-hover:translate-x-full ease">LogOut</span>
            <span className="relative invisible">LogOut</span>
        </button>
    );
}

export default LogOutBtn;
