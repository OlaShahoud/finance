import React, { useEffect, useState } from "react";
import Rate from "../Rate/Rate";
import Expenses from "../Expenses/Expenses";
import "./Transactions.css";
import novication from "../../assets/img/Vector.png";
import bringback from "../../assets/img/bring back.png";
import icon1 from "../../assets/img/Income.png";
import icon2 from "../../assets/img/Expense.png";
import Total from "../Total/Total";
import line from "../../assets/img/Line 2.png";
import TransactionSection from "../TransactionSection/TransactionSection";
const Transactions = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const userId = localStorage.getItem("user_id");
        const jwt = encodeURIComponent(localStorage.getItem("jwt"));
        const response = await fetch("/webhook/Transactions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            secret: "admin@123.123",
            jwt: jwt,
          },
          body: JSON.stringify({
            user_id: userId,
            jwt: jwt,
          }),
        });
        const data = await response.json();
        console.log("data", data);
        if (!response.ok) {
          throw new Error(data.message);
        }
        setData(data);
        console.log("Data Fetched: ", data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const ArrayTotal = [
    {
      icon: icon1,
      text: "Total Balance",
      number: "$7,783.00",
      cNamber: "total-number1",
    },
    {
      icon: icon2,
      text: "Total Expense",
      number: "-$1.187.40",
      cNamber: "total-number2",
    },
  ];
  return (
    <div>
      <div className="Transactions">
        <div className="transaction1">
          <div className="back">
            <img src={bringback} alt="back" />
          </div>
          <p className="transactionText">Transaction</p>
          <div className="notivcation">
            <img src={novication} alt="no" />
          </div>
        </div>
        <div className="balance">
          <p className="textBalance">Total Balance</p>
          <p className="numberBalance">$7,783.00</p>
        </div>
        <div className="array-total array-transaction">
          {ArrayTotal.map((item, index) => {
            return (
              <>
                <Total
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  number={item.number}
                  cNamber={item.cNamber}
                />
                <div className={`${index == 1 ? "lineNone" : ""}`}>
                  <img src={line} alt="" />
                </div>
              </>
            );
          })}
        </div>
        <Rate />
        <Expenses />
      </div>
      <TransactionSection />
    </div>
  );
};

export default Transactions;
