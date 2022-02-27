import React from 'react';
import ToDos from "./todoSub";


function List ({ToDo,SetToDo,SetEditToDo,inputText}) {
    return (
        <div>
            
            <ul>
                {ToDo.map((todo) => (
                    <ToDos 
                    inputText={inputText}
                    key={todo.id}
                    texti={todo.text}
                    ToDo={ToDo}
                    SetToDo={SetToDo}
                    todo= {todo}
                    SetEditToDo = {SetEditToDo} />
                ))}
            </ul>
        </div>
    )
}

export default List;