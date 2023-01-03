import useInput from "../hooks/use-Input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredMail,
    isValid: enteredMailIsValid,
    hasError: mailInputHasError,
    valueChangeHandler: mailChangeHandler,
    valueBlurHandler: mailBlurHandler,
    reset: resetMailInput,
  } = useInput((value) => value.includes("@") && value.length > 8);


  let formIsValid = false;

  if (enteredNameIsValid && enteredMailIsValid) {
    formIsValid = true;
  }


  const formSubmition = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid && !enteredMailIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredMail);

    resetNameInput();

    resetMailInput();
  };

  const nameInputClass = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const mailInputClass = mailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmition}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
      </div>
      {nameInputHasError && (
        <p className="error-text">Name input must be filled!</p>
      )}
      <div className={mailInputClass}>
        <label htmlFor="e-mail">Your E-mail</label>
        <input
          type="email"
          id="mail"
          value={enteredMail}
          onChange={mailChangeHandler}
          onBlur={mailBlurHandler}
        />
      </div>
      {mailInputHasError && (
        <p className="error-text">E-mail input must be filled!</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
