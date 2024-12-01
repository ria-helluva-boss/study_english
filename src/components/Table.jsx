import React from 'react';
import { observer } from 'mobx-react-lite';
import TableRow from "./TableRow";
import styles from "./Table.module.css";
import LoadingIndicator from './LoadingIndicator'; 
import ErrorNotification from './ErrorNotification'; 
import AddWordForm from './AddWordForm'; 
import { useStore } from '../WordStoreContext';

const Table = observer(() => {
    const { wordStore } = useStore(); 

    return (
        <div>
            {wordStore.isLoaded ? ( 
                <LoadingIndicator />
            ) : (       
                <div>
                    <AddWordForm /> 
                    {wordStore.error && <ErrorNotification message={wordStore.error} />} 

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
                            {wordStore.words.map((word) => (
                                <TableRow rowData={word} key={word.id}/>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
});

export default Table;