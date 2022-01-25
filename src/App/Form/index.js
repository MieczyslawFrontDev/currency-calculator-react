import { useState } from "react";
import { Result } from "./Result";
import { Clock } from "./Clock";
import {
  Legend,
  Paragraph,
  Label,
  Strong,
  Input,
  Wrapper,
  Button,
  ErrorText,
  LoadingText,
  InfoText,
} from "./styled";
import { useRatesFromApi } from "../useRatesFromApi";

export const Form = () => {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState();
  const [currency, setCurrency] = useState("EUR");
  const ratesData = useRatesFromApi();

  const calculateResult = () => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  const onFormReset = (event) => {
    event.preventDefault();
    setAmount("");
    setCurrency("EUR");
    setResult("");
  };

  return (
    <form onSubmit={onFormSubmit} onReset={onFormReset}>
      <Clock />
      <Legend>Kalkulator walut</Legend>
      {ratesData.state === "loading" ? (
        <LoadingText>
          Trwa ładowanie kursów walut z Europejskiego Banku Centralnego...
        </LoadingText>
      ) : ratesData.state !== "success" ? (
        <ErrorText>
          Błąd ! Coś poszło nie tak.
          <br />
          Sprawdź, czy masz połączenie z internetem. <br />
          Jeśli tak, wina leży po stronie serwera. <br />
          Przepraszamy !
        </ErrorText>
      ) : (
        <>
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
            <Input
              as="select"
              name="currency"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {Object.keys(ratesData.rates).map((currency) => (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              ))}
            </Input>
          </Label>
          <Wrapper>
            <Button type="submit">Przelicz</Button>
            <Button type="reset">Wyczyść</Button>
          </Wrapper>
          <Result result={result} />
          <InfoText>
            Kursy walut pobierane są z Europejskiego Banku Centralnego. <br />
            Aktualne na dzień: <strong>{ratesData.date}</strong>
          </InfoText>
        </>
      )}{" "}
    </form>
  );
};
