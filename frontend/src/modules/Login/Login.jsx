import { Button, Typography, notification } from 'antd';
import Layout from 'antd/es/layout/layout';
import axios from 'axios';
import React, { useState } from 'react';
import "./Login.css";
import { validateEmail } from '../Signup/utils/validateEmail';
import validator from 'validator';
import CustomNavbar from '../CustomNavbar/CustomNavbar';
import { useNavigate } from 'react-router-dom';




const { Title } = Typography;



function Login() {

    const error = "error";

    const navigate = useNavigate();


    const [api, contextHolder] = notification.useNotification();




    const openNotificationWithIcon = (type, message, description) => {

        api[type]({
            message: message,
            description:
                description
        });

    };




    const [email, setEmail] = useState("");


    const [name, setName] = useState("");


    const [phone, setPhone] = useState("");


    const [message, setMessage] = useState("");






    const onChangeName = (event) => {


        setName(event.target.value);

    }





    const onChangeEmail = (event) => {


        setEmail(event.target.value);

    }






    const onChangePhone = (event) => {


        setPhone(event.target.value);

    }






    const onChangeMessage = (event) => {


        setMessage(event.target.value);

    }







    const sendMessage = (e) => {

        e.preventDefault();

        const formData = {
            email: email,
            name: name,
            message: message
        };


        if (validateEmail(email)) {







            if (message.length > 0) {


                // axios.post
                //     (
                //         `http://143.244.156.234/api/mail`,
                //         {
                //             clientEmail: email,
                //             name: name,
                //             phoneNo: phone,
                //             message: message
                //         }
                //     )


                // emailjs.send('service_yijj47s', 'template_kix4gp9', formData, 'eGWgHRaCoCFJzaDKl').then((res) => {
                //     console.log(res);
                // }).catch((error) => {
                //     console.log(error);
                // })


                axios.post("http://localhost:8080/users/login", {
                    email: email,
                    password: message
                }).then((res) => {
                    if (res.data.data == "Login Successfully") {
                        localStorage.setItem("email", email)
                        const message = "Login";
                        const description = "Login success";

                        openNotificationWithIcon("success", message, description);


                        setTimeout(() => {
                            navigate("/home")

                        }, 800)
                    } else {
                        const message = "Error Login";
                        const description = "Invalid Credentials";

                        openNotificationWithIcon("error", message, description);
                    }
                }).catch((error) => {
                    console.log(error)
                })




            }


            else {
                const message = "Incorrect Message";
                const description = "Enter a correct message";

                openNotificationWithIcon(error, message, description);
            }

        }















        else {
            const message = "Incorrect Email";
            const description = "Enter a correct email";

            openNotificationWithIcon(error, message, description);
        }



        // axios.post
        // (
        //     `http://localhost:3001/mail`,
        //     {
        //         clientEmail: email,
        //         name: name,
        //         phoneNo: phone,
        //         message: message
        //     }
        // )

    }








    return (
        <div>
            <CustomNavbar />
            <Layout id='contact-form-layout'>


                <div id='contact-form-container'>



                    <Title level={3} id="contact-form-heading" >LOGIN</Title>

                    <input placeholder='youremail@domain.com' type="email" className='input' name='contact-email' value={email}


                        onChange={onChangeEmail}
                    />



                    <textarea placeholder='Password' className='text-area-message-contact-form'
                        name='message'
                        value={message}


                        onChange={onChangeMessage}
                    />



                    <Button id='send-msg-btn' type='submit' size='large' onClick={sendMessage}>LOGIN</Button>
                </div>



                {contextHolder}
            </Layout>
        </div>
    )
}

export default Login;