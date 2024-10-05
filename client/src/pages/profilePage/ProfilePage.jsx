import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import { AuthContext } from "../../context/AuthContext";
import "./ProfilePage.scss";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext } from "react";
import apiRequest from "../../lib/apiRequest";
// import Card from "../../components/card/Card";

function ProfilePage() {
  const data = useLoaderData();

  console.log(data);

  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      localStorage.removeItem("user");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={currentUser?.avatar || "noavatar.jpeg"} alt="User Avatar" />
            </span>
            <span>
              Username: <b>{currentUser?.username || "N/A"}</b>
            </span>
            <span>
              E-mail: <b>{currentUser?.email || "N/A"}</b>
            </span>
            {/* ---------------- */}
            <button onClick={handleLogout}>Logout</button>
            {/* ---------------- */}
          </div>

          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>

          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error while loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.userPosts} />}
            </Await>
          </Suspense>

          {/* <List /> */}

          <div className="title">
            <h1>Saved List</h1>
          </div>

          {/* <List /> */}
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error while loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.savedPosts} />}
            </Await>
          </Suspense>

        </div>
      </div>


      <div className="chatContainer">
        <div className="wrapper">
          <Suspense fallback={<p>Loading...</p>}>
          <Await
              resolve={data?.chatResponse}
              errorElement={<p>Error loading chats!</p>}
            >
              {(chatResponse) =>
                chatResponse ? (
                  <Chat chats={chatResponse?.data || []} />
                ) : (
                  <p>No chats available.</p>
                )
              }
            </Await>
          </Suspense>
          {/* <Chat /> */}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
