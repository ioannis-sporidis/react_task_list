import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import styles from './TaskInput.module.css';

const TaskInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const taskInputChangeHandler = e => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(e.target.value);
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddTask(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Tasks I need to do:</label>
        <input type='text' onChange={taskInputChangeHandler} />
      </div>
      <Button type='submit'>Add Task</Button>
    </form>
  );
};

export default TaskInput;
