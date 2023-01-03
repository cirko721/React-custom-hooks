import useInput from "../hooks/use-input2";

const BasicForm = (props) => {
  const {
    enteredValue: enteredName,
    hasError: nameError,
    blurChangeHandler,
    valueChangeHandler,
    valueIsValid: nameIsValid,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredLName,
    hasError: lNameError,
    blurChangeHandler: blur,
    valueChangeHandler: lNameChangeHandler,
    valueIsValid: lNameIsValid,
    reset: resetLName,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredMail,
    hasError: mailError,
    blurChangeHandler: mailBlur,
    valueChangeHandler: mailChangeHandler,
    valueIsValid: mailIsValid,
    reset: resetMail,
  } = useInput((value) => value.includes("@") && value.length > 8);

  const nameInputClass = nameError ? "form-control invalid" : "form-control";
  const lNameInputClass = lNameError ? "form-control invalid" : "form-control";
  const mailInputClass = mailError ? "form-control invalid" : "form-control";

  let formIsValid = false;
  if (nameIsValid && lNameIsValid && mailIsValid) {
    formIsValid = true;
  }

  const formSubmit = (e) => {
    e.preventDefault();

    if(!formIsValid) {
      return;
    }
    console.log(enteredName, enteredLName, enteredMail)
    resetName();
    resetLName();
    resetMail();
  };
  return (
    <form onSubmit={formSubmit}>
      <div className="control-group">
        <div className={nameInputClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={valueChangeHandler}
            onBlur={blurChangeHandler}
            value={enteredName}
          />
          {nameError && <p className="error-text">Name input must be filled!</p>}
        </div>
        <div className={lNameInputClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lNameChangeHandler}
            onBlur={blur}
            value={enteredLName}
          />
          {lNameError && <p className="error-text">Last Name input must be filled!</p>}
        </div>
      </div>
      <div className={mailInputClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
            type="text"
            id="name"
            onChange={mailChangeHandler}
            onBlur={mailBlur}
            value={enteredMail}
          />
          {mailError && <p className="error-text">Mail input need to include "@" !</p>}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
