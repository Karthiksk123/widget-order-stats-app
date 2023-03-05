import React from "react";
import "./OrderStat.scss";
import Info from "../../constants/data.json";

const OrderStat = ({ currentIndex }) => {
  return (
    <div className="order-stats-comp">
      <div className="order-stats-head">
        <h1>Order Stats</h1>
      </div>
      <div className="order-stats-inner">
        <div className="order-stats-title">
          <h4>Category : </h4>
          <p>{Info.orderStats[currentIndex].category}</p>
        </div>
        <div className="order-stats-type">
          <h4>Profit : </h4>
          <p>{Info.orderStats[currentIndex].type}</p>
        </div>
        <div className="order-stats-perc">
          <>
            {Info.orderStats[currentIndex].type === "Increased" ? (
              <h4> Increased Percentage : </h4>
            ) : (
              <h4> Decreased Percentage : </h4>
            )}
          </>
          <>
            {Info.orderStats[currentIndex].type === "Increased" ? (
              <p> {Info.orderStats[currentIndex].inc} </p>
            ) : (
              <p> {Info.orderStats[currentIndex].dec}</p>
            )}
          </>
        </div>
        <div className="order-stats-value">
          {Info.orderStats[currentIndex].category === "Revenue" ? (
            <h4>Value of Revenue : </h4>
          ) : (
            <h4>Count : </h4>
          )}
          <p>{Info.orderStats[currentIndex].value}</p>
        </div>
      </div>
      <p>--- Done by Karthik | Developer @ 2023 ---</p>
    </div>
  );
};

export default OrderStat;
