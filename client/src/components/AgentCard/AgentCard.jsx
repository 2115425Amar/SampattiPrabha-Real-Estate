import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import "./AgentCard.scss";

const AgentCard = ({ item }) => {
  const { currentUser } = useContext(AuthContext);
  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const navigate = useNavigate();

  const handleSendMessage = async () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    // prevent messaging yourself
    if (currentUser.id === item.id) {
      alert("You cannot send a message to yourself!");
      return;
    }

    setIsSendingMessage(true);
    try {
      // create chat with agent
      await apiRequest.post("/chats", {
        receiverId: item.id,
      });

      // navigate to profile with chat tab open
      navigate(`/profile?chat=${item.id}`);
    } catch (err) {
      console.error(err);
      // maybe chat already exists → still navigate
      navigate(`/profile?chat=${item.id}`);
    } finally {
      setIsSendingMessage(false);
    }
  };

  return (
    <div className="card">
      <Link to={`/agents/${item.id}`} className="imageContainer">
        <img src={item.avatar || "/noavatar.jpg"} alt={item.username} />
      </Link>

      <div className="textContainer">
        <h2 className="title">
          <Link to={`/agents/${item.id}`}>{item.username}</Link>
        </h2>

        <p className="address">
          <img src="/pin.png" alt="location" />
          <span>{item.email}</span>
        </p>

        <div className="bottom">
          <div className="icons">
            <div className="icon">
              <button onClick={handleSendMessage} disabled={isSendingMessage}>
                <img src="/chat.png" alt="chat" />
                {isSendingMessage ? "Opening Chat..." : "Send a Message"}
              </button>
            </div>
            <div className="icon">
              <img src="/save.png" alt="save" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
