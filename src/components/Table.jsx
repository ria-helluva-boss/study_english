import TableRow from "./TableRow";
import data from "../data";
import styles from "./Table.module.css";

const Table = () => {
    return(
        <table className={styles.table_container}>
            <thead className={styles.table}>
                <tr>
                    <th>Слово</th>
                    <th>Транскрипция</th>
                    <th>Перевод</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((word) => (
                        <TableRow key={word.id} {...word}/>
                    ))}
            </tbody>
        </table>
        
    );};

    export default Table;