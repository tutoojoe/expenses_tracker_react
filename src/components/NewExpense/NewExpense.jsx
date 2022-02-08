import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";



const NewExpense = (props) => { 
    const [isEditing, setIsEditing] = useState(false)


    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        console.log(expenseData);
        props.onAddExpenseItem(expenseData);
        setIsEditing(false)
        // console.log(props)        
    };
    const startEditingHandler = () => {
        setIsEditing(true)
        console.log(setIsEditing)
    };

    const stopEditingHandler = () => { 
        setIsEditing(false)
    };

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add new expense</button>}
            {isEditing && <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancel={stopEditingHandler} />}
        </div>
    )
};

export default NewExpense;