import "./Button.css";

function Button({ btnName, propClassName, propOnClick }) {
  return (
    <button className={propClassName} onClick={propOnClick}>
      {btnName}
    </button>
  );
}
export default Button;
