import React from 'react'
import "./MainHome.css"
import CustomNavbar from '../CustomNavbar/CustomNavbar'
import { useNavigate } from 'react-router-dom'

function MainHome() {

    const navigate = useNavigate();

    const navigateToSignUp = () => {
        navigate("/signup")
    }

    const navigateToLogin = () => {
        navigate("/login")
    }

    return (
        <div className='banner'>
            <CustomNavbar />
            <div className='content'>
                <h1>Welcome To Chat App</h1>
                <p>Get Connected, Get Chatting!</p>
                <div >
                    <button type='button' className='button' onClick={navigateToSignUp}><span></span>SignUp</button>
                    <button type='button' className='button' onClick={navigateToLogin}><span></span>Login</button>
                </div>
            </div>

        </div>
    )
}

export default MainHome