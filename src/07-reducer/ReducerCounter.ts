export type StateType = {
  count: number;
  status: "pending" | "success" | "error";
};
export const initialState: StateType = {
  count: 0,
  status: "pending",
};
type UpdateAction = {
  type: "increment" | "decrement" | "reset";
};
type StatusAction = {
  type: "setStatus";
  payload: "pending" | "success" | "error";
};
export type ReducerType = UpdateAction | StatusAction;
export const reducerCounter = (state: StateType, action: ReducerType) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "setStatus":
      return { ...state, status: action.payload };
    default:
      const unhandledActionType: never = action;
      throw new Error(`Unhandled action type: ${unhandledActionType}`);
      return state;
  }
};
