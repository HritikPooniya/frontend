import React, { useState } from "react";
import "../styles/register.css";
import axios from "axios";
import { Router, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e: any, name: string) => {
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8080/login", data);
      console.log(response.data.user);
      if (response.status === 200) {
        localStorage.setItem("token", response.data?.token);
        localStorage.setItem("user", response.data?.user);
        alert("Logged In");
        if (response.data?.user?.role === "Role A") {
          navigate("/upload");
        } else {
          navigate("/approve");
        }
      }
    } catch (error) {
      alert("Error: " + (error.response ? error.response.data : error.message));
    }
  };

  console.log({ data });
  return (
    <div className="registerBlock">
      <h3>LogIn User</h3>
      <img src="/assets/signup.webp" alt="" />

      <input
        type="email"
        placeholder="Enter your Email"
        onChange={(e) => handleInput(e, "email")}
      />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => handleInput(e, "password")}
      />

      <button onClick={handleSubmit}>LogIn</button>
    </div>
  );
};

export default Login;
