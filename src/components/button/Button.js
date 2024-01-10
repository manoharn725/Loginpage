import './Button.css';

function Button({btnName, propClassName, propOnClick}){
    return(
        <div>
            <button className={propClassName} onClick={propOnClick}>{btnName}</button>
        </div>
    )
}
export default Button;