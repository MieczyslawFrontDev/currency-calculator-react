import { useState } from "react";
import "./style.css";
import { currencies } from "../currencies";
import { Result } from "./Result";

export const Form = ({ calculateResult, result, setResult }) => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].short);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  const onFormReset = () => {
    setAmount("");
    setCurrency(currencies[0].short);
    setResult("");
  };


  return (
    <form className="formElement js-form" onSubmit={onFormSubmit} onReset={onFormReset}>
      <legend className="formElement__legend">Kalkulator walut</legend>
      <p className="formElement__paragraph">
        Wymagane pola oznaczone są gwiazdką*
      </p>
      <p>
        <label className="formElement__label">
          <strong className="formElement__labelText">Kwota (zł):*</strong>
          <input
            type="number"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            className="formElement__field js-amount"
            name="amount"
            min="1"
            step="any"
            placeholder="Wpisz kwotę..."
            required
          />
        </label>
      </p>
      <p>
        <label className="formElement__label">
          <strong className="formElement__labelText">Waluta:*</strong>
          <select
            name="currency"
            className="formElement__field js-currency"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map(currency => (
              <option 
                key={currency.short} 
                value={currency.short}
              >
                {currency.name}
            </option>
            ))}
          </select>
        </label>
      </p>
      <div className="flexBox">
        <button type="submit" className="formElement__button js-submit">
          Przelicz
        </button>
        <button
          type="reset"
          className="formElement__button formElement__button--reset js-reset"
        >
          Wyczyść
        </button>
      </div>
      <Result result={result} />
    </form>
  );
};