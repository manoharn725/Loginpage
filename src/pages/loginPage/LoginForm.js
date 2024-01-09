import Button from "../../components/button/Button";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";

function LoginForm() {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login Form</h1>
        <div className="input-box">
          <input type="text" placeholder="UserName" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <Button classNames="btn rounded btn-primary" btnName="Login" />
        <div className="register-link">
          <p>
            Don't Forgot to have an Account? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
}
export default LoginForm;
