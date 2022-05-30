import React, { useState, useEffect } from 'react';

import Shop from './Shop';
import ShopListForm from './ShopListForm'
import axios from 'axios';
import "./ShopList.css";

const ShopList = () => {
  const [todos, setTodos] = useState([]);

  const [list_id, setList_Id] = useState([]);
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos]
    setTodos(newTodos)
    const list = {
      text: todo.text
    };

    axios.post(`http://127.0.0.1:9091/list.php`, {
      list
    }, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    })

      //const data = await axios.get(`http://127.0.0.1:9091/list.php`).then(res => res.data);
      .then(res => {
        console.log(res);
        console.log(res.data);
        setList_Id(res.data);
      })


  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:9091/searchList.php`,{ withCredentials: true, headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', } })
      .then((res) => {
        setTodos(res.data);
      })
      .catch((e) => {
        console.error('error', e);
        setTodos([]);
      });
  }, []);



  /*
    
useEffect(
    () => { 
     axios.get(`http://127.0.0.1:9091/list.php`).then(res =>  console.log(res.data)).catch((e)=>console.log(e));
     /*axios.get(`http://127.0.0.1:9091/searchList.php`,
        {
          withCredentials: true,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }
        }).then((result)=>{console.log(result)})
   }
)
*/
  const updateTodo = (todoId, newValue) => {

    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))

    const uplist = {
      id: list_id,
      product: newValue.text
    };

    console.log(uplist)
    axios.post(`http://127.0.0.1:9091/updatelist.php`, {
      uplist
    }, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }



  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr);
    const removelist = {
      id: list_id
    };

    axios.post(`http://127.0.0.1:9091/removelist.php`, {
      removelist
    }, {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

  }


  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }

      return todo;
    })

    setTodos(updatedTodos);
  }

  return (
    <div>

      <h1>Список продуктів</h1>
      <ShopListForm onSubmit={addTodo} />
      <Shop
        todos={todos}
        updateTodo={updateTodo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </div>
  )
}

export default ShopList;