import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./Login";
import TodoList from "./todoList";

function App() {
  console.log('** APP E');
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/todoList" element={<TodoList />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
