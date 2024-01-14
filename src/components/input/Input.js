import "./Input.css";

function Input({ propType, propValue, propOnchange, propPlaceholder, propRequired }) {
  return (
    <input
      type={propType}
      value={propValue}
      onChange={propOnchange}
      placeholder={propPlaceholder}
      required={propRequired}
    />
  );
}

export default Input;
