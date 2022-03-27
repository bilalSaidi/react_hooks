import React, { useState, useReducer } from "react";
import { data } from "./data";
import Reducer from "./reducer";
const UseRH = () => {
  const [todoaction, setTodoaction] = useState("");

  const initialState = data;
  const [state, dispatch] = useReducer(Reducer, initialState);
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "ADD_TODO", payload: todoaction });
    setTodoaction("");
  };
  return (
    <div>
      {/* add new todo */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="enter an action"
          value={todoaction}
          onChange={(e) => setTodoaction(e.target.value)}
        />
        <button type="submit">add todo</button>
      </form>
      {/* List Show */}
      <div>
        <h2>List Todo</h2>
        {state.map((todo) => {
          return (
            <div key={todo.id}>
              <span>{todo.todo}</span>
              <button
                onClick={() => {
                  dispatch({ type: "REMOVE_TODO", payload: todo.id });
                }}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UseRH;
