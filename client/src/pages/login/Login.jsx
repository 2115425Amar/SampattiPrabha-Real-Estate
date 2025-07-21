import React, { useContext, useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";

function Login() {

  const [error, setError] = useState("")
  const [isLoading , setIsLoading] = useState(false);

  const {updateUser} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    setError("");
    
    setIsLoading(true);
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

   try{
    // http://localhost:8000/
    const res = await apiRequest.post("/auth/login",{
      username,
      password,
    });

    updateUser(res.data)

    //  console.log(res.data);
     navigate("/");
   }catch(err){
    console.log(err);
    setError(err.response.data.message);
  }
  finally{
    setIsLoading(false);
  }

    // console.log(username, email, password);
  }

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input name="username" required minLength={3} maxLength={20} type="text" placeholder="Username" />
          <input name="password" required type="password" placeholder="Password" />
          <button>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
          <Link to="/forgot">Forgot Password</Link>
        </form>
      </div>
      <div className="imgContainer">
        {/* <img src="/bg.png" alt="" /> */}
        <img src="/sp4.jpeg" alt="" />
      </div>
    </div>
  );
}

export default Login;