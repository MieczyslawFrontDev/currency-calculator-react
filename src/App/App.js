import { useState } from "react";
import { Form } from "./Form";
import { currencies } from "./currencies";
import { Wrapper } from "./styled";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <Wrapper>
      <Form
        result={result}
        calculateResult={calculateResult}
        setResult={setResult}
      />
    </Wrapper>
  );
}

export default App;
