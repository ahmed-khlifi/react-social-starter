import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import logo from "../assets/logo.png";
import vr from "../assets/vr.png";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const getFormData = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const createUser = async () => {
    setIsLoading(true);
    axios.post("http://localhost:8000/auth/login", data).then(({ data }) => {
      setIsLoading(false);
      localStorage.setItem("token", data.token);
    });
  };

  return (
    <div className="auth-page-container">
      <div className="authForm">
        <div className="authFormSide">
          <img src={logo} alt="logo" />
          <h1>Defy the Past Step into the Future</h1>
          <img src={vr} alt="vr" id="VarFormImg" />
        </div>
        <div className="authFormInputs">
          <h1>Login</h1>
          <div>
            <Input
              placeholder="Email"
              onChange={(text) => getFormData("email", text)}
              required
              value={data.email}
            />
            <Input
              placeholder="Password"
              onChange={(text) => getFormData("password", text)}
              required
              value={data.password}
            />
          </div>
          <Button label={"Login"} onClick={createUser} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Login;
