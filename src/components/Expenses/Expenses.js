import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter'


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);

    };

    return (

        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {props.items.map( expense => <ExpenseItem title ={expense.title} amount={expense.ammount} data={expense.date}/>)}
            <ExpenseItem title={props.items[0].title} ammount={props.items[0].amount} date={props.items[0].date} />
            <ExpenseItem title={props.items[1].title} ammount={props.items[1].amount} date={props.items[1].date} />
            <ExpenseItem title={props.items[2].title} ammount={props.items[2].amount} date={props.items[2].date} />
            <ExpenseItem title={props.items[3].title} ammount={props.items[3].amount} date={props.items[3].date} />
        </Card>

    )
}

export default Expenses