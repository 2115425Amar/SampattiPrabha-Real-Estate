import React from "react";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./ProfilePage.scss";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://c.ndtvimg.com/2021-10/nn6emufo_ms-dhoni-ipl_650x400_07_October_21.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
                alt=""
              />
            </span>
            <span>
              Username: <b>M.S. Dhoni</b>
            </span>
            <span>
              E-mail: <b>thala07@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;