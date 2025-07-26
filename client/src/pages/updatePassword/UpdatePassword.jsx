import "./Register.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

function UpdatePassword() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/reset-password", {
        email,
        newPassword: password,
      });
      alert("Password updated successfully");
      navigate("/login");
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Reset Password</h1>
          <input name="email" type="email" placeholder="Email" required />
          <input name="password" type="password" placeholder="New Password" required />
          <button disabled={isLoading}>
            {isLoading ? "Updating..." : "Reset Password"}
          </button>
          {error && <span>{error}</span>}
        </form>
      </div>
      <div className="imgContainer">
        <img src="/sp4.jpeg" alt="Reset" />
      </div>
    </div>
  );
}

export default UpdatePassword;
