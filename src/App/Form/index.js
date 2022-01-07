import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Clock } from "./Clock";

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
    <form className="form" onSubmit={onFormSubmit} onReset={onFormReset}>
      <Clock />
      <legend className="form__legend">Kalkulator walut</legend>
      <p className="form__paragraph">
        Wymagane pola oznaczone są gwiazdką*
      </p>
      <p>
        <label className="form__label">
          <strong className="form__labelText">Kwota (zł):*</strong>
          <input
            type="number"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            className="form__field"
            name="amount"
            min="1"
            step="any"
            placeholder="Wpisz kwotę..."
            required
          />
        </label>
      </p>
      <p>
        <label className="form__label">
          <strong className="form__labelText">Waluta:*</strong>
          <select
            name="currency"
            className="form__field"
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
      <div className="form__buttons">
        <button type="submit" className="form__button">
          Przelicz
        </button>
        <button
          type="reset"
          className="form__button form__button--reset"
        >
          Wyczyść
        </button>
      </div>
      <Result result={result} />
    </form>
  );
};