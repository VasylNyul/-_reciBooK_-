import React, {useState} from 'react'
import ShopListForm from './ShopListForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import "./ShopList.css";
<<<<<<< HEAD
//import axios from 'axios';
=======


>>>>>>> f9616922d1c734c649c0bc4681411512f0bd9a81

function Shop({todos, completeTodo, removeTodo, updateTodo}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
<<<<<<< HEAD
    
    
=======

>>>>>>> f9616922d1c734c649c0bc4681411512f0bd9a81
    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        }) 
<<<<<<< HEAD

=======
>>>>>>> f9616922d1c734c649c0bc4681411512f0bd9a81
    }


    if(edit.id) {
        return <ShopListForm edit={edit} onSubmit={submitUpdate} />
    }

<<<<<<< HEAD
console.log(todos)
=======

>>>>>>> f9616922d1c734c649c0bc4681411512f0bd9a81

    return todos.map((todo, index) => (
        <div 
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
            key={index}> 

            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
<<<<<<< HEAD
                {todo.text || todo}
=======
                {todo.text}
>>>>>>> f9616922d1c734c649c0bc4681411512f0bd9a81
            </div>

            <div className="icons">
                <RiCloseCircleLine 
                onClick={() => removeTodo(todo.id)}
                className='delete-icon'
                />
                <TiEdit
                onClick={() => setEdit({id: todo.id, value: todo.text})}
                className='edit-icon'
                />
            </div>
        </div>
    ))
}

export default Shop