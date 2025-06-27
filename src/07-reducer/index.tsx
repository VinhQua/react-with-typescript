import React, { useReducer, type Reducer } from "react";
import {
  initialState,
  reducerCounter,
  type ReducerType,
  type StateType,
} from "./ReducerCounter";
const mapper = {
  pending: "badge-warning",
  success: "badge-success",
  error: "badge-error",
};
const Component = () => {
  const [state, dispatch] = useReducer(reducerCounter, initialState);
  const { count, status } = state;
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl">React Reducer Example</h1>
      <p>This is a simple example of using React's useReducer hook.</p>
      <p className="font-bold">Count: {count}</p>
      <p className={`font-bold badge badge-outline ${mapper[status]}`}>
        Status: {status}
      </p>
      <div className="flex justify-center mt-4">
        <button
          className="btn btn-primary mr-2"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
        <button
          className="btn btn-error ml-2"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
      <h2 className="mt-4 font-bold">Set Status</h2>
      <div className="flex justify-center mt-4">
        <button
          className="btn btn-warning"
          onClick={() => dispatch({ type: "setStatus", payload: "pending" })}
        >
          Pending
        </button>
        <button
          className="btn btn-success ml-2"
          onClick={() => dispatch({ type: "setStatus", payload: "success" })}
        >
          Success
        </button>
        <button
          className="btn btn-error ml-2"
          onClick={() => dispatch({ type: "setStatus", payload: "error" })}
        >
          Error
        </button>
      </div>
    </div>
  );
};

export default Component;
