import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Draggable from "react-draggable";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
  };
  const addTodo = (value) => {
    const newTodos = [...todos, value];
    setTodos(newTodos);
    console.log(todos);
    setValue("");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
          marginBottom: 20,
          fontFamily: "fantasy",
          fontSize: 25,
        }}
      >
        <div
          style={{
            marginRight: 5,
          }}
        >
          Create an item:
        </div>
        <input
          style={{
            marginRight: 5,
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          style={{
            backgroundColor: "lightgreen",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "1px",
            border: "1px solid black",
            borderRadius: "10px",
          }}
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: 800,
            width: 500,
            borderRight: "1px solid black",
          }}
        >
          <p
            style={{ textAlign: "center", fontFamily: "fantasy", fontSize: 25 }}
          >
            To do
          </p>
          <div>
            {todos.map((todo) => {
              return (
                <Draggable>
                  <div
                    style={{
                      margin: 10,
                      width: 450,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid black",
                        borderRadius: "25px",
                        wordWrap: "break-word",
                        width: 300,
                        backgroundColor: "lightgreen",
                      }}
                    >
                      <p style={{ textAlign: "center" }}>{todo}</p>
                    </div>
                  </div>
                </Draggable>
              );
            })}
          </div>
        </div>
        <div style={{ height: 800, width: 500, borderLeft: "1px solid black" }}>
          <p
            style={{ textAlign: "center", fontFamily: "fantasy", fontSize: 25 }}
          >
            Done
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
