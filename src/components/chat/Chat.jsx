import { useState, React } from "react";
import "./Chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://c.ndtvimg.com/2021-10/nn6emufo_ms-dhoni-ipl_650x400_07_October_21.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
            alt=""
          />
          <span>Thala</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://c.ndtvimg.com/2021-10/nn6emufo_ms-dhoni-ipl_650x400_07_October_21.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
            alt=""
          />
          <span>Thala</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://c.ndtvimg.com/2021-10/nn6emufo_ms-dhoni-ipl_650x400_07_October_21.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
            alt=""
          />
          <span>Thala</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://c.ndtvimg.com/2021-10/nn6emufo_ms-dhoni-ipl_650x400_07_October_21.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
            alt=""
          />
          <span>Thala</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://c.ndtvimg.com/2021-10/nn6emufo_ms-dhoni-ipl_650x400_07_October_21.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
            alt=""
          />
          <span>Thala</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://c.ndtvimg.com/2021-10/nn6emufo_ms-dhoni-ipl_650x400_07_October_21.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
            alt=""
          />
          <span>Thala</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://c.ndtvimg.com/2021-10/nn6emufo_ms-dhoni-ipl_650x400_07_October_21.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
                alt=""
              />
              Thala
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Chat