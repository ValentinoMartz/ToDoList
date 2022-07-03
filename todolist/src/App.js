import React, { useState, useEffect } from "react";

import "./App.css";
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { Form } from "./components/Form";
import { useSnackbar } from "notistack";

function App() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [error, setError] = useState(null);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState("");

  const handleSave = (todoId) => {
    const index = todos.findIndex((emp) => emp.id === todoId);
    const newTodo = [...todos];

    newTodo[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done,
    };

    setTodos(newTodo);
    if (newTodo[index].done) {
      enqueueSnackbar("Task mark as done");
    } else {
      enqueueSnackbar("Task mark as undone");
    }
  };
  const handleDelete = (todoId) => {
    const updateTodos = todos.filter((item) => item.id !== todoId);
    setTodos(updateTodos);

    enqueueSnackbar("task deleted");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.length < 5) {
      setError("At least 5 words required");
      return false;
    }
    setTodos([{ id: Date.now(), title: todo, done: false }, ...todos]); //ojo aca

    setError(null);
    setTodo("");
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));

    if (storedTodos) setTodos(storedTodos);
  }, []);

  // saving the todos in browser storage to prevent loss of todos on refreshing tab
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Layout>
      <Header />
      <Form
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        submit={handleSubmit}
        error={error}
      />
      <hr className="border-primary" />
      <List done={handleSave} del={handleDelete} todos={todos} />
    </Layout>
  );
}

export default App;
