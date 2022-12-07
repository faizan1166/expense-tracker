import React, { useContext } from "react";
import { GlobalContext } from "../contextAPI/Global";

function Expenses() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card" id="cardbody">
              <div className="card-body" id="balanceinfo">
                <h5 className="card-title">Balance</h5>
                <p className="card-text">{income}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card" id="cardbody2">
              <div className="card-body" id="balanceinfo2">
                <h5 className="card-title">Expense</h5>
                <p className="card-text">{expense}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expenses;
