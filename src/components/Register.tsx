import React, { useState } from "react";
import "../styles/register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleInput = (e: any, name: string) => {
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8080/register", data);
      console.log(response.data);
      if (response.status === 201) {
        alert("User registered"); 
        navigate('/login')
      }
    } catch (error) {
      alert("Error: " + (error.response ? error.response.data : error.message));
    }
  };
  console.log({ data });
  return (
    <div className="registerBlock">
      <h3>Register User</h3>
      <img src="/assets/signup.webp" alt="" />
      <input
        type="text"
        placeholder="Enter your Name"
        onChange={(e) => handleInput(e, "name")}
      />
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
      <div className="roleblock">
        Choose a role :
        <select name="role" id="role" onChange={(e) => handleInput(e, "role")}>
          <option value="Role A">Role A</option>
          <option value="Role B">Role B</option>
        </select>
      </div>
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default Register;
