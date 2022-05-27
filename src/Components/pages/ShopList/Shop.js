import React, {useState} from 'react'
import ShopListForm from './ShopListForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'


function Shop({todos, completeTodo, removeTodo, updateTodo}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        }) 
         // axios.post(`http://127.0.0.1:9091/updatelist.php`, {
        //edit }, {
        // withCredentials: true,
     // headers: {
      //  'Access-Control-Allow-Origin': '*',
       // 'Content-Type': 'application/json',
     // }
     // })
     // .then(res => {
     //   console.log(res);
     //   console.log(res.data);
    //})

    }


    if(edit.id) {
        return <ShopListForm edit={edit} onSubmit={submitUpdate} />
    }



    return todos.map((todo, index) => (
        <div 
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
            key={index}> 

            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
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