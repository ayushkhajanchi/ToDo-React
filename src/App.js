import React, { useState } from "react";
import "./App.css";
import Home from "./compnents/Home/index";
import Form from "./compnents/Home/Form"
import List from "./compnents/Home/List";

function App() {
  const [inputText, SetInputText] = useState();
  const [ToDo, SetToDo] = useState([]);
  const [EditToDo, SetEditToDo] = useState(null);
  return (
    <div>
      <Home />
      <center><Form
      inputText={inputText}
        SetInputText={SetInputText}
        ToDo={ToDo}
        SetToDo={SetToDo}
      /></center>
      <List 
      inputText ={inputText}
      ToDo={ToDo}
      SetToDo={SetToDo}
      EditToDo={EditToDo}
      SetEditToDo={SetEditToDo}
      />
    </div>
  );
}

export default App;
