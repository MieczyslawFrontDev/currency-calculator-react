import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Clock } from "./Clock";
import { Legend, Paragraph, Label, Strong, Input, Wrapper, Button } from "./styled";

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
    <form onSubmit={onFormSubmit} onReset={onFormReset}>
      <Clock />
      <Legend>Kalkulator walut</Legend>
      <Paragraph>Wymagane pola oznaczone są gwiazdką*</Paragraph>
        <Label>
          <Strong>Kwota (zł):*</Strong>
          <Input
            type="number"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            name="amount"
            min="1"
            step="any"
            placeholder="Wpisz kwotę..."
            required
          />
        </Label>
        <Label>
          <Strong>Waluta:*</Strong>
          <Input as="select"
            name="currency"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.short} value={currency.short}>
                {currency.name}
              </option>
            ))}
          </Input>
        </Label>
      <Wrapper>
        <Button type="submit">Przelicz</Button>
        <Button type="reset">Wyczyść</Button>
      </Wrapper>
      <Result result={result} />
    </form>
  );
};