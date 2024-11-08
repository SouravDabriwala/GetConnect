import React, { memo, useEffect } from "react";
import "./Chat.css";
import Users from "../../Users/components/Users";
import Messages from "../../Messages/components/Messages";

function Chat() {








  useEffect(() => {

    // if (!(localStorage.getItem("jwt") && localStorage.getItem("email"))) {

    //   history.push("/login");

    // }





  }, [])



  return (
    <div id="chat-layout">
      <Users />
      <Messages />
    </div>
  );
}

export default memo(Chat);