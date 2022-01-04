import "./style.css";

export const Result = ({ result }) => (
  <>
    <p className="formElement__paragraph--result">Otrzymana kwota:</p>
    {!!result && (
      <p className="formElement__result">
        {result.sourceAmount}&nbsp;PLN&nbsp;=
        {" "}
        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
      </p>
    )}
  </>
);
