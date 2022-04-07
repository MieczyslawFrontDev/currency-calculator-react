import styled from "styled-components";

export const Legend = styled.legend`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 26px;
  margin: 0 auto;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-style: italic;
  color: teal;
  margin-bottom: 30px;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  text-align: center;
  margin: 10px;
`;

export const Strong = styled.strong`
  display: inline-block;
  width: 150px;
  font-size: 24px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: block;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 10px;
  }

`;
export const Input = styled.input`
  max-width: 350px;
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  text-align: center;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  margin: 20px;
`;

export const Button = styled.button`
  max-width: 150px;
  width: 100%;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 10px;
  margin: 0 auto;

  &:hover {
    filter: brightness(120%);
  }

  @media (max-width: 480px){
    max-width: 150px;
    width: 100%;
  }
`;

export const ErrorText = styled.div`
margin-top: 20px;
font-size: 16px;
text-align: center;
`
export const LoadingText = styled.div`
margin-top: 20px;
font-size: 16px;
text-align: center;
`
export const InfoText = styled.div`
margin-top: 20px;
font-size: 16px;
text-align: center;
`