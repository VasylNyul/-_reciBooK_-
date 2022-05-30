import React, {useState, useEffect, useRef} from 'react'
<<<<<<< HEAD
//import axios from 'axios';
=======
>>>>>>> f9616922d1c734c649c0bc4681411512f0bd9a81
import "./ShopList.css";

function ShopListForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')
<<<<<<< HEAD

    };

   
    return (
=======
    };

    return (
        <div >
>>>>>>> f9616922d1c734c649c0bc4681411512f0bd9a81
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
            <>    
            <input 
            type="text" 
            placeholder="Оновіть назву продукту..." 
            value={input} 
            name="text" 
            className="todo-input edit"
            onChange={handleChange} 
            ref={inputRef}
            />
            <button className="todo-button edit">Оновити</button>
            
            </>
            ) : 
            ( 
            <>
            <input 
                type="text" 
                placeholder="Введіть назву продукту..." 
                value={input} 
                name="text" 
                className="todo-input"
                onChange={handleChange} 
                ref={inputRef}
                />
                <button className="todo-button">Додати</button>
                </>
                )}

            
        </form>
<<<<<<< HEAD
=======
        </div>
>>>>>>> f9616922d1c734c649c0bc4681411512f0bd9a81
    )
}

export default ShopListForm