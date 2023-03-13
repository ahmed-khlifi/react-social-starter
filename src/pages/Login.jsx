import React, { useState } from "react";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import logo from "../assets/logo.png";
import vr from "../assets/vr.png";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    matchPass: "",
  });
  const [passMatchErr, setPassMatchErr] = useState(false);
  const [addImageUrl, setAddImageUrl] = useState(false);
  const [imageToUpload, setImageToUpload] = useState();
  const token = localStorage.getItem("token");
  const getFormData = (name, value) => {
    setData({ ...data, [name]: value });
  };
  const uploadImage = async (image) => {
    const form = new FormData();

    form.append("image", image);
    //console.log(form, image);
    axios
      .post("http://localhost:8000/images/upload", form, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const createUser = async () => {
    axios.post("http://localhost:8000/auth/register", data).then((r) => {
      console.log(r);
      // setAddImageUrl(true);
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
          <h1>Create account</h1>
          {!addImageUrl && (
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
          )}
          {!addImageUrl && <Button label={"Next"} onClick={createUser} />}
          {addImageUrl && (
            <div className="addimageUrl">
              <p>Upload image</p>
              <label htmlFor="image">
                {imageToUpload ? (
                  <img alt="profile" src={URL.createObjectURL(imageToUpload)} />
                ) : (
                  <PhotoCameraIcon id="PhotoCameraIcon" />
                )}
              </label>

              <input
                type="file"
                id="image"
                hidden
                onChange={(e) => setImageToUpload(e.target.files[0])}
              />
              {imageToUpload && (
                <Button
                  label={"Create account"}
                  onClick={() => uploadImage(imageToUpload)}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
