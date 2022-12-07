import React, { useState, useContext } from "react";
import { GlobalContext } from "../contextAPI/Global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AddBalance() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <>
      <h3>Add New </h3>
      <form onSubmit={onSubmit}>
        <div className="textFields">
          <div className="textfield">
            <label htmlFor="text">Expense </label>
            <input
              className="form-control"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter Expense Thing"
            />
          </div>
          <div className="textfield">
            <label htmlFor="amount">
              Amount <br />
            </label>
            <input
              className="form-control"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Amount To Add"
            />
          </div>
        </div>

        <button className="btn btn-outline-primary my-2">
          Add-
          <i className="fa fa-arrow-circle-right"></i>
        </button>
      </form>
    </>
  );
}

export default AddBalance;
