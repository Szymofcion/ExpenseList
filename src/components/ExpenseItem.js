import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
   

    const clickHandler = () => {
        setTitle('Updated!');
        
    }
// const  expenseDate= new Date(2022,10,1);
// const expenseTitle = 'Car Insurance';
// const expenseAmount = 259.99
    return (
        <Card className='expense-item'>
           <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.ammount}</div>
            </div>
            <button onClick={clickHandler}> title</button>
        </Card>
        )
}

export default ExpenseItem;