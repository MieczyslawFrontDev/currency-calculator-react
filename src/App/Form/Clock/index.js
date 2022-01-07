import "./style.css";
import { useState, useEffect } from "react";

const formatDate = (date) => date.toLocaleTimeString(undefined, {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

export const Clock = () => {

const [date, setDate] = useState(new Date());

useEffect(() => {
  const intervalId = setInterval(() => {
    setDate(new Date())
  }, 1000);
  return () => clearInterval(intervalId);
}, []);

  return (
    <p className="clock">
      Dzisiaj jest
      {" "}
      {formatDate(date)}
    </p>
  );
};