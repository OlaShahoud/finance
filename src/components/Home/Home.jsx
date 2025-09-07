import Total from "../Total/Total";
import icon1 from "../../assets/img/Income.png";
import icon2 from "../../assets/img/Expense.png";
import novication from "../../assets/img/Vector.png";
import line from "../../assets/img/Line 2.png";
import "./Home.css";
import Rate from "../Rate/Rate";
import Expenses from "../Expenses/Expenses";
import HomeSection from "../HomeSection/HomeSection";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!localStorage.getItem("jwt")) {
          navigate("/login");
        }
        setLoading(true);
        const userId = localStorage.getItem("user_id");
        const jwt = encodeURIComponent(localStorage.getItem("jwt"));
        const response = await fetch("/webhook/Home", {
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
    <div className="home">
      <div className="homee">
        <div className="homeOne">
          <p className="homeTwo">
            Hi, Welcome Back<span className="morning">Good Morning</span>
          </p>
          <div className="notivcation">
            <img src={novication} alt="no" />
          </div>
        </div>
        <div className="array-total">
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
      <HomeSection />
    </div>
  );
};

export default Home;
