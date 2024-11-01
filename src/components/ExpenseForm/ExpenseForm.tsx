'use client';

import styles from './ExpenseForm.module.css';

const ExpenseForm = () => {
  return (
    <form className={styles.ExpenseForm}>
      <div className={styles.inputContainer}>
        <label htmlFor="">금액</label>
        <input type="text" />
      </div>
      <button className={styles.button}>등록</button>
    </form>
  );
};

export default ExpenseForm;
