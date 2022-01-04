import "./App.css";
import { Form } from "./Form";
import { useState } from "react";
import { currencies } from "./currencies";

function App() {
  const [result, setResult] = useState();

const calculateResult = (amount, currency) => {
  const rate = currencies.find(({short}) => short === currency).rate;

  setResult({
    sourceAmount: +amount,
    targetAmount: amount / rate,
    currency
  })
}

  return (
    <main className="container">
      <Form result={result} calculateResult={calculateResult} setResult={setResult} />
    </main>
  );
}

export default App;
