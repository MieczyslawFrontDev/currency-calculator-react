import { StyledResult } from "./styled";

export const Result = ({ result }) => (
  <>
    {!!result && (
      <StyledResult>
        {result.sourceAmount}&nbsp;PLN&nbsp;=
        {" "}
        <strong>{result.targetAmount.toFixed(2)}&nbsp;{result.currency}</strong>
      </StyledResult>
    )}
  </>
);
