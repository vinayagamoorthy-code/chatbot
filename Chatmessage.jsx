function Chatmessage({ message, sender }) {
     return (
         
        <div className="chat-row" style={{ margin: "10px 0" }}>  
        <div className="robot">{sender === "robot" && <img className="chat-img" src="/robot.svg" />}</div>
            <span className="bubble">{message}</span>
        <div className="user">{sender === "user" && <img className="chat-img" src="/Human.svg" />}</div>
          </div>
        );
      }


export default Chatmessage