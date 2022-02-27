import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Form ({inputText,SetInputText,ToDo,SetToDo,EditToDo,SetEditToDo}) {
    
    const updateTodo = (title, id, completed) => {
        const newTodo = ToDo.map((todo) =>
        todo.id === id ? {title, id, completed} : todo
        );
        SetToDo(newTodo);
        SetEditToDo("");
    };
    
    const inputHandler = (e) => {
        SetInputText(e.target.value)
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if(inputText)
        {
       if (!EditToDo)
{        SetToDo([...ToDo,{text: inputText, completed: false, id: Math.random()*1000}])
    SetInputText("");
    } else {
        updateTodo(inputText, EditToDo.id, EditToDo.completed )
    }
}
    
    }
    return(
<div>
<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={inputText} onChange={inputHandler} id="outlined-basic" label="New Task" variant="outlined" />
      <Button onClick={submitHandler} variant="contained">Add</Button>
    </Box>
   
            </div>

    )
}

export default Form;