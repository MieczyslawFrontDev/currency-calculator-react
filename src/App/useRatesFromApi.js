import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesFromApi = () => {
  const [ratesData, setRatesData] = useState({ state: "loading" });


  useEffect(() => {
    const getDataFromAPI = async () => {
      const apiData = "https://api.exchangerate.host/latest?base=PLN";
      try {
        const response = await axios.get(apiData);
        const { rates, date } = await response.data;

        if (!rates) {
          throw new Error(response.statusText);
        }

        setRatesData({
          rates,
          date,
          state: "success",
        });
      } catch (error) {
        setRatesData({ state: "error" });
        console.error("Something wrong happened", error);
      }
    };

    setTimeout(getDataFromAPI, 2000);
  }, []);

  return ratesData;

};
