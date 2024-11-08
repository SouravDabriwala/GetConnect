import React from "react";
import "./Users.css";
import { Layout, Typography, Progress } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { memo } from "react";
import { getAllUsers } from "../services/UserSlice";
import { getPrivateRoomOfUser } from "../../PrivateRoom/services/PrivateRoomSlice";
import { updateSenderAndReceiverData } from "../../SenderAndReceiver/SenderAndReceiverSlice";


const { Title } = Typography;
const { Text } = Typography;





function Users() {


  const dispatch = useDispatch();
  const users = useSelector((state) => state.userSlice);




  const email = localStorage.getItem("email");





  const getPrivateRoom = async (client) => {

    console.log(client)
    const data = {
      clickByUserEmail: email,
      clickOnUserEmail: client.email
    }


    dispatch(getPrivateRoomOfUser(data));
    dispatch(updateSenderAndReceiverData({


      messageSender: email,
      messageReceiver: client.email,
      messageReceiverName: client.username

    }));

  }



  const getAllUsersList = async () => {
    const response = await dispatch(getAllUsers());
    // if (response.payload.length > 0) {
    //   getPrivateRoom(response.payload[0]);
    // }
  }




  useEffect(() => {
    getAllUsersList();
  }, []);








  return (
    <Layout id="users-layout">
      <div id="users-layout-chat-heading-container">
        <Title level={3} id="user-admin-chats-heading">
          Chats
        </Title>
      </div>

      <div id="chat-search">
        <SearchOutlined />
        <input placeholder="Search" id="search-input" />
      </div>
      {


        users.isLoader === true ?
          <Progress type="dashboard" percent={50} size={20} className='progress-animation' />
          :
          users.data &&
          users.data.filter(user => user.email != email).map((user) => {
            return (
              <div className="user-data-container" key={user.id} onClick={() => getPrivateRoom(user)} >
                <img src={"https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg"} alt="" className="user-image" />
                <Text className="user-name">{user.username}</Text>
              </div>
            );
          })


      }
    </Layout>
  );
}

export default memo(Users);