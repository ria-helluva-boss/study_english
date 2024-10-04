import styles from "./Button.module.css";
const Button = ({ text, className }) => {
    return (
        <button className={className}>{text}</button>
    )
}
export default Button;
