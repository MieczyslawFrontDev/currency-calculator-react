import { StyledClock } from "./styled";
import {useCurrentDate} from "./useCurrentDate";

const formatDate = (date) => date.toLocaleTimeString(undefined, {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

export const Clock = () => {
const date = useCurrentDate();

  return (
    <StyledClock>
      Dzisiaj jest
      {" "}
      {formatDate(date)}
    </StyledClock>
  );
};