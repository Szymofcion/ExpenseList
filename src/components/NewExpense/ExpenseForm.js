import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // Alternative option
    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredEmount:'',
    //     enteredDate:'',
    // });

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
        // setUserInput((preveState) =>{
        //     return {...preveState, enteredTitle:e.targer.value}
        // })
    }
    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // setUserInput((preveState) =>{
        //     return {...preveState, enteredTitle:e.targer.value}
        // })
    }
    const dateChanheHandler = (e) => {
        setEnteredDate(e.target.value)
        // setUserInput((preveState) =>{
        //     return {...preveState, enteredTitle:e.targer.value}
        // })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseDate)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }


    return (

        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} onChange={amountChangeHandler} min='0.01' step='0.01' />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={dateChanheHandler} min='2022-10-17' max='2024-01-01' />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={props.onCancel}> Cancel</button>
                <button type="submit"> Add expense</button>
            </div>
        </form>

    )

}

export default ExpenseForm