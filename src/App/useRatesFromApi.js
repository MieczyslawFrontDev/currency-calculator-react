import { useState, useEffect } from "react";
// import axios from "axios";
import apiData from "./apiData.json";

export const useRatesFromApi = () => {
  const [ratesData, setRatesData] = useState({ state: "loading" });

  useEffect(() => {
    const getDataFromJson = () => {
      try {
        const response = apiData;
        const { rates, date } = response;

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

    setTimeout(getDataFromJson, 2000);
  }, []);

  return ratesData;

  // useEffect(() => {
  //   const getDataFromAPI = async () => {
  //     const apiData = "https://api.exchangerate.host/latest?base=PLN";
  //     try {
  //       const response = await axios.get(apiData);
  //       const { rates, date } = await response.data;

  //       const stringData = JSON.stringify(response.data);
  //       console.log(stringData);
  
  //       "Information"

  //       "The data from stringData displayed as text in the console was copied to the apiData file and formatted there."
  //       "The file was then imported as a variable into the useRatesFromApi Hook and used to retrieve the data"

  //       if (!rates) {
  //         throw new Error(response.statusText);
  //       }

  //       setRatesData({
  //         rates,
  //         date,
  //         state: "success",
  //       });
  //     } catch (error) {
  //       setRatesData({ state: "error" });
  //       console.error("Something wrong happened", error);
  //     }
  //   };

  //   setTimeout(getDataFromAPI, 2000);
  // }, []);

  // return ratesData;

  // --------------------------------------------------------------

  // FETCH AWAIT

  //   useEffect(() => {
  //     const getDataFromAPI = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://api.exchangerate.hos/latest?base=PLN"
  //         );

  //         if (!response.ok) {
  //           throw new Error(response.statusText);
  //         }

  //         const { rates, date } = await response.json();

  //         setRatesData({
  //           rates,
  //           date,
  //           state: "success",
  //         });

  //       } catch (error) {
  //         setRatesData({ state: "error" });
  //         console.error("Something wrong happened", error);
  //       }
  //     };

  //     setTimeout(getDataFromAPI, 2000);
  //   }, []);

  //   return ratesData;

  // ------------------------------------------------------------------

  //   FETCH PROMISES

  //   useEffect(() => {
  //     const getDataFromAPI = () => {
  //       const promise = fetch("https://api.exchangerate.host/latest?base=PLN");
  //       promise
  //         .then((response) => {
  //           if (!response.ok) {
  //             throw new Error(response.statusText);
  //           }
  //           return response;
  //         })
  //         .then((response) => response.json())
  //         .then((response) => {
  //           const { rates, date } = response;

  //           setRatesData({
  //             rates,
  //             date,
  //             state: "success",
  //           });
  //         })
  //         .catch(setRatesData({ state: "error" }))
  //         .catch(error => console.error("Something wrong happened", error))

  //     };
  //     setTimeout(getDataFromAPI, 2000);
  //   }, []);

  //   return ratesData;

  //   ---------------------------------------------------------------------------

  // XMLHttpRequest

  //   useEffect(() => {
  //     const dataFromAPI = () => {
  //       try {
  //         const request = new XMLHttpRequest();

  //         request.open("GET", "https://api.exchangerate.host/latest?base=PLN");

  //         request.responseType = "json";

  //         request.onload = () => {
  //           const { rates, date } = request.response;

  //           setRatesData({
  //             rates,
  //             date,
  //             state: "success",
  //           });
  //         };

  //         request.send();

  //       } catch (error) {
  //         setRatesData({ state: "error" });
  //         console.error("sth bad happened");
  //       }
  //     };
  //     setTimeout(dataFromAPI, 2000);
  //   }, []);

  //   return ratesData;

  // ----------------------------------------------------------------------------
};
