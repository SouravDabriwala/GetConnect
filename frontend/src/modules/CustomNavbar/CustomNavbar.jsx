import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react'
import "./CustomNavbar.css"
import { useNavigate } from 'react-router-dom';

function CustomNavbar() {


    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

    const [currentNavLink, setCurrentNavLink] = useState('Home')

    const navigate = useNavigate();






    const onSelectNavLink = (event) => {
        setCurrentNavLink(event.key);
        navigate(event.key);

    }





    const calculateDeviceWidth = () => {
        setDeviceWidth(window.innerWidth);
    }





    useEffect(() => {

        window.addEventListener('resize', calculateDeviceWidth);

        return () => {
            window.removeEventListener('resize', calculateDeviceWidth);
        };

    }, []);





    return (
        <Layout id='navbar'>
            <div></div>

            <Menu
                id='nav-links'
                items=
                {
                    [
                        { label: "Home", key: "/home" },
                        { label: "Chat", key: "/chat" },
                        { label: "SignUp", key: "/signup" },
                        { label: "Login", key: "/login" },
                    ]
                }
                onClick={onSelectNavLink}
                selectedKeys={[currentNavLink]}
            ></Menu>

        </Layout>
    )
}

export default CustomNavbar;