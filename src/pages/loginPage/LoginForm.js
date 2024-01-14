import { useState } from "react";
import "./LoginForm.css";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function LoginForm() {
  const [action, setAction] = useState("Login");

  const handleSignup = () => {
    setAction("Sign Up");
  };
  const handleLogin = () => {
    setAction("Login");
  };

  return (
    <div className="wrapper">
      <form action="">
        <h1>{action} Form</h1>
        <div className={action === "Login" ? "hide" : "input-box"}>
          <Input
            propType="text"
            propPlaceholder={
              action === "Login" ? "Enter userame" : "create username"
            }
            propRequired
          />

          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <Input
            propType="email"
            propPlaceholder={
              action === "Login" ? "Enter usermail id" : "create usermail"
            }
            propRequired
          />

          <MdEmail className="icon" />
        </div>
        <div className="input-box">
          <Input
            propType="password"
            propPlaceholder={
              action === "Login" ? "Enter userpassword" : "create password"
            }
            propRequired
          />

          <FaLock className="icon" />
        </div>
        <div className={action === "Sign Up" ? "hide" : "remember-forgot"}>
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#">Forgot Password?</a>
        </div>

        <Button
          propClassName="btn rounded btn-primary"
          btnName={action}
          propOnClick={handleLogin}
        />

        <div className={action === "Sign Up" ? "hide" : "register-link"}>
          <p>
            Don't Forgot to have an Account?{" "}
            <a href="#" onClick={handleSignup}>
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
export default LoginForm;
