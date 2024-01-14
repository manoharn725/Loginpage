import "./Input.css";

function Input({ propType, propPlaceholder, propRequired }) {
  return (
    <input
      type={propType}
      placeholder={propPlaceholder}
      required={propRequired}
    />
  );
}

export default Input;
