import { useState } from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";


function LoginForm() {
  const [actionName, setActionName] = useState("Login");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    setActionName("Sign Up");
  };
  const handleClick = () => {
    if (actionName === "Login") {
      if (userMail && password) {
        setLoggedIn(true);
      }
    } else {
      if (userName && userMail && password) {
        setActionName("Login");
      } else {
        alert("please create usename, usermail and password");
      }
    }
  };
  const handleLogout = () => {
    setLoggedIn(false)
  }
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleUserMail = (e) => {
    setUserMail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={loggedIn ? "welcome page" : "login page"}>
      {loggedIn ? (
        <div>
          <h1 className="heading-color"><span className="username">Welcome</span> {userName}</h1>
          <Button
            propClassName="btn rounded btn-primary"
            btnName="Log Out"
            propOnClick={handleLogout}
          />
        </div>
      ) : (
        <div className="wrapper">
          <form action="">
            <h1>{actionName} Form</h1>
            <div className={actionName === "Login" ? "hide" : "input-box"}>
              <Input
                propType="text"
                propValue={userName}
                propOnchange={handleUserName}
                propPlaceholder={
                  actionName === "Login" ? "Enter userame" : "create username"
                }
                propRequired
              />

              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <Input
                propType="email"
                propValue={userMail}
                propOnchange={handleUserMail}
                propPlaceholder={
                  actionName === "Login"
                    ? "Enter usermail id"
                    : "create usermail"
                }
                propRequired
              />
              <MdEmail className="icon" />
            </div>
            <div className="input-box">
              <Input
                propType="password"
                propValue={password}
                propOnchange={handlePassword}
                propPlaceholder={
                  actionName === "Login"
                    ? "Enter userpassword"
                    : "create password"
                }
                propRequired
              />
              <FaLock className="icon" />
            </div>
            <div
              className={actionName === "Sign Up" ? "hide" : "remember-forgot"}
            >
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
              <span>Forgot Password?</span>
            </div>

            <Button
              propClassName="btn rounded btn-primary"
              btnName={actionName}
              propOnClick={handleClick}
            />

            <div
              className={actionName === "Sign Up" ? "hide" : "register-link"}
            >
              <p>
                Don't Forgot to have an Account?{" "}
                <span onClick={handleRegister}>
                  Register
                </span>
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
export default LoginForm;
