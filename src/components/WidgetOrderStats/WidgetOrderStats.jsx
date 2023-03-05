import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import React, { useState } from "react";
import "./WidgetOrderStats.scss";
import Info from "../../constants/data.json";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import OrderStat from "../OrderStat/OrderStat";

const WidgetOrderStats = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <div className="order-stats-component">
        {Info.orderStats.map((stats, index) => (
          <div className="order-stats-wrapper">
            <div
              className="order-stats-inner-wrapper"
              key={index}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="title-inner">
                <div className="title-inner-left">{stats.category}</div>
                <div className="title-inner-right">
                  {stats.dec ? (
                    <div className="inner-right-ele" style={{ color: "red" }}>
                      <ArrowDownwardIcon /> <p>{stats.dec}</p>
                    </div>
                  ) : (
                    <div className="inner-right-ele" style={{ color: "green" }}>
                      <ArrowUpwardIcon /> <p>{stats.inc}</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="order-stats-lower">
                {stats.icon === "ArrowOutwardIcon" ? (
                  <ArrowOutwardIcon
                    style={{ backgroundColor: "fb8500" }}
                    className="icon"
                  />
                ) : stats.icon === "LocalGroceryStoreIcon" ? (
                  <LocalGroceryStoreIcon
                    style={{ backgroundColor: "52b788" }}
                    className="icon"
                  />
                ) : stats.icon === "RestaurantMenuIcon" ? (
                  <RestaurantMenuIcon
                    style={{ backgroundColor: "d00000" }}
                    className="icon"
                  />
                ) : stats.icon === "ShoppingBagIcon" ? (
                  <ShoppingBagIcon
                    style={{ backgroundColor: "ffba08" }}
                    className="icon"
                  />
                ) : (
                  ""
                )}
                <h3>{stats.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <OrderStat currentIndex={currentIndex} />
    </>
  );
};

export default WidgetOrderStats;
