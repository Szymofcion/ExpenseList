import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setIsEdititing] = useState(false);


    // łancuch komunikowania sie z innymi komponentami
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        // setIsEdititing(false)
    }

    const startEditingHandler = () => {
        setIsEdititing(true)
    }
    const quitEditingHandler= () =>{
        setIsEdititing(false)
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}> Add New Expenses</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={quitEditingHandler} />}
        </div>
    )
}

export default NewExpense;