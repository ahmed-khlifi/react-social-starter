import React, { useState } from "react";
import logo from "../assets/logo.png";
import vr from "../assets/vr.png";
import Button from "../components/Button";
import Input from "../components/Input";

const Login = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    matchPass: "",
  });
  const [passMatchErr, setPassMatchErr] = useState(false);
  const getFormData = (name, value) => {
    setData({ ...data, [name]: value });
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
          <h1>Log into your account</h1>
          <div>
            <Input
              placeholder="Name"
              onChange={(text) => getFormData("name", text)}
              required
              value={data.name}
            />
            <Input
              placeholder="Last name"
              onChange={(text) => getFormData("lastName", text)}
              required
              value={data.lastName}
            />
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
            <Input
              placeholder="Confirm password"
              onChange={(text) => {
                getFormData("matchPass", text);
                if (text !== data.password) {
                  setPassMatchErr(true);
                } else {
                  setPassMatchErr(false);
                }
              }}
              className={passMatchErr && "inputError"}
              errorMessage={passMatchErr && "Password don't mach"}
              required
            />
          </div>
          <Button label={"Next"} onClick={() => console.log(data)} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Login;
