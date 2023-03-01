import React from "react";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
    return(
    <div className="chat"> 
        <div className="chatInfo">
            <span>Aditya</span>
            <div className="chatIcons">
                <img src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/cam.png" alt="" srcset="" />
                <img src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/add.png" alt="" srcset="" />
                <img src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/more.png" alt="" srcset="" />
            </div>
        </div>
        <Messages/>
        <Input/>
     </div>
    )
        
}

export default Chat