import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';

import Divider from '@mui/material/Divider';


function ToDos({key, texti, todo, ToDo, SetToDo,SetEditToDo,inputText }) {
    const deleteHandler = () => {
        SetToDo(ToDo.filter((el) => el.completed === false));
    }

    const handleTick = (event) => {
              
        const newTodo = ToDo.map((e)=>{
            if(e.id === todo.id)
            {
              if (e.completed === true)
              {
                e.completed = false
              }
              else{
                e.completed = true
              }
            }
            return e;
          });
       
        SetToDo(newTodo);
    }

    const editHandler =()=>{
        const findTodod = todo;
        findTodod.text = inputText;
        const newTodo = ToDo.map((e)=>{
          if(e.id === todo.id)
          {
            if(inputText !== null)
              e.text = inputText;
          }
          return e;
        });
        SetToDo(newTodo);
    }

      let tryID = {id: 1};
      if (todo !== undefined)
      {
        tryID.id = todo.id;
      }

    return (
        <center>
        <div>
            
             <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem secondaryAction={
                <IconButton  aria-label="delete">
                <EditTwoToneIcon onClick={editHandler} /> 
                <DeleteIcon onClick={deleteHandler} />                
              </IconButton>
                    
            }
            disablePadding
          >
            <ListItemButton dense>
              <ListItemIcon>
                <Checkbox id={todo.id} onClick={handleTick} />
              </ListItemIcon>
              {todo.completed ? (<ListItemText style={{textDecoration: 'line-through'}} primary={texti} />) : (<ListItemText  primary={texti} />)}
            </ListItemButton>
          </ListItem>    
          <Divider />
    </List>
        </div>
        </center>
    )
}

export default ToDos;