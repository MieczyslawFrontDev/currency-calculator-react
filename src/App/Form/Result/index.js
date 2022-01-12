import { Paragraph, StyledResult } from "./styled";

export const Result = ({ result }) => (
  <>
    {!!result && (
      <StyledResult>
        {result.sourceAmount}&nbsp;PLN&nbsp;=
        {" "}
        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
      </StyledResult>
    )}
  </>
);
