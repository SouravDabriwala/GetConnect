import { Button, Typography, notification } from 'antd';
import Layout from 'antd/es/layout/layout';
import axios from 'axios';
import React, { useState } from 'react';
import "./SignUp.css";
import "./SignUpMobile.css";
import "./SignUpTablet.css";
import { validateEmail } from '../utils/validateEmail';
import validator from 'validator';
import CustomNavbar from '../../CustomNavbar/CustomNavbar';




const { Title } = Typography;



function SignUp() {

    const error = "error";



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

            if (name.length > 0) {


                if (validator.isMobilePhone(phone)) {



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


                        axios.post("http://localhost:8080/users/save", {
                            username: name,
                            email: email,
                            password: message,
                            phoneNo: phone
                        })


                        setTimeout(() => {

                            const message = "Sign Up";
                            const description = "user has been sended successfully";

                            openNotificationWithIcon("success", message, description);

                        }, 500)

                    }


                    else {
                        const message = "Incorrect Message";
                        const description = "Enter a correct message";

                        openNotificationWithIcon(error, message, description);
                    }

                }


                else {
                    const message = "Incorrect Phone No";
                    const description = "Enter a correct phone number";

                    openNotificationWithIcon(error, message, description);
                }



            }

            else {
                const message = "Incorrect Name";
                const description = "Enter a correct name";

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



                    <Title level={3} id="contact-form-heading" >SIGN UP</Title>

                    <input placeholder='youremail@domain.com' type="email" className='input' name='contact-email' value={email}


                        onChange={onChangeEmail}
                    />



                    <div id='phone-and-name-container-contact-form'>

                        <input placeholder='Your Name' type="text" className='input-phone-name' name='contact-name' value={name}


                            onChange={onChangeName}
                        />


                        <input placeholder='Phone' type="text" className='input-phone-name' name='Phone' value={phone}


                            onChange={onChangePhone}
                        />


                    </div>




                    <textarea placeholder='Password' className='text-area-message-contact-form'
                        name='message'
                        value={message}


                        onChange={onChangeMessage}
                    />



                    <Button id='send-msg-btn' type='submit' size='large' onClick={sendMessage}>SIGN UP</Button>
                </div>



                {contextHolder}
            </Layout>
        </div>
    )
}

export default SignUp;