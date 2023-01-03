import { useReducer } from "react";

const useInput = (validation) => {
  const initialReducer = {
    value: "",
    isTouched: false,
  };
  const reducer = (state, action) => {
    if (action.type === "INPUT") {
      return { value: action.value, isTouched: state.isTouched };
    }
    if (action.type === "BLUR") {
      return { value: state.value, isTouched: true };
    }
    if (action.type === "RESET") {
      return { value: "", isTouched: false };
    }
    return reducer;
  };
  const [inputState, dispatch] = useReducer(reducer, initialReducer);

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const blurChangeHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const valueIsValid = validation(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  return {
    enteredValue: inputState.value,
    blurChangeHandler,
    valueIsValid,
    valueChangeHandler,
    hasError,
    reset,
  };
};

export default useInput;
