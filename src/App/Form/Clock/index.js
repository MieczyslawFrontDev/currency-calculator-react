import "./style.css";
import { useState, useEffect } from "react";

export const Clock = () => {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="clock">
      {`Dzisiaj jest: ${date.toLocaleTimeString("pl", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })}`}
    </p>
  );
};
