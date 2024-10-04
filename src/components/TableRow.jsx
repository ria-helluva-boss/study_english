import Button from "./Button";
import styles from "./Button.module.css";

const TableRow = ({english, transcription, russian}) => {
    const buttons = [
        { text: "Edit", className: styles.edit_button },
        { text: "Delete", className: styles.delete_button },
    ];

return (
    <tr>
        <td>{english}</td>
        <td>{transcription}</td>
        <td>{russian}</td>
        <td>
        {buttons.map((button, index) => (
    <Button key={index} className={button.className}> {button.text} </Button>
))}
        </td>
    </tr>
);};

export default TableRow;