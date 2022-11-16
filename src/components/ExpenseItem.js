import './ExpenseItem.css';

function ExpenseItem(props) {
// const  expenseDate= new Date(2022,10,1);
// const expenseTitle = 'Car Insurance';
// const expenseAmount = 259.99


    return (
        <div className='expense-item'>
            <div>
                <div>{props.date.toLocaleString('pl-PL',{month:'long'})}</div>
                <div></div>
                <div></div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.ammount}</div>
            </div>
        </div>)
}

export default ExpenseItem;