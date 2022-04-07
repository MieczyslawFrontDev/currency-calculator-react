import styled from "styled-components";

export const StyledClock = styled.p`
  text-align: right;
  margin-top: 0;
  margin-bottom: 20px;
  font-family: "Roboto Mono", monospace;
  font-size: 12px;

@media(max-width: 480px){
  font-size: 10px;
  text-align: center;
}
`;
