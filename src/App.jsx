import { useState } from "react";
import styles from "./app.module.css";

export const App = () => {
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);
    const [error, setError] = useState('');
    const isValueVaild = value.length >= 3 ? false : true;

    const onInputButtonClick = () => {
       const promptValue = prompt();

       if (promptValue.length < 3) {
        setError('Введенное значение должно содержать минимум 3 символа');
       } else {
        setError('')
       }

       setValue(promptValue);
    }

    const onAddButtonClick = () => {
        if (value.length >= 3) {

            const date = new Date().toLocaleString("en-US", { hour12: false });

            const updateList = [...list, {id: Date.now(), value, date: date}]
            setList(updateList);
        }
        setValue('');
        setError('');
        console.log(list);
    }

	return (
		<div className={styles.app}>
            <h1 className={styles.pageHeading}>Ввод значения</h1>
            <p className={styles.noMarginText}>
            Текущее значение <code>{value}</code><output className={styles.currentValue}></output>
            </p>
            {error ? <div className={styles.error}>{error}</div> : null }
            <div className={styles.buttonsContainer}>
                <button className={styles.button} onClick={onInputButtonClick}>Ввести новое</button>
                <button className={styles.button} onClick={onAddButtonClick} disabled={isValueVaild}>Добавить в список</button>
            </div>
            <div className={styles.listContainer}>
                <h2 className={styles.listHeading}>Список:</h2>
                {list.length > 0 ? null : <p className={styles.noMarginText}>Нет добавленных элементов</p>}
                <ul className={styles.list}>
                    {list.map((item) => <li className={styles.listItem} key={item.id}>{item.value} время добавления: {item.date}</li>)}
                </ul>
            </div>
        </div>
	);
};

