import React, { useContext } from "react";

import { GlobalContext } from "../contextAPI/Global";

function Transactions({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const income = transaction.amount;
  const operator = income < 0 ? "-" : "+";
  const balanceinfo = {
    color: "green",
  };
  const balanceinfo2 = {
    color: "red",
  };
  return (
    <li className={transaction.amount < 0 ? "-" : "+"} id="list">
      {transaction.text}{" "}
      <span className="mx-4" style={income < 0 ? balanceinfo2 : balanceinfo}>
        {operator}₹{Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="btn btn-danger mx-4"
      >
        Delete
      </button>
    </li>
  );
}
export default Transactions;
