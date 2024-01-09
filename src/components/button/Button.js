import './Button.css';

function Button({btnName, classNames}){
    return(
        <div>
            <button className={classNames}>{btnName}</button>
        </div>
    )
}
export default Button;