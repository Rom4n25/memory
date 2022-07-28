import { StyledStats } from "./styles/Stats";

const Stats = ({ points, record }) => {
  return (
    <StyledStats>
      <p>Record: {record}</p>
      <p>Points: {points}</p>
    </StyledStats>
  );
};
export default Stats;
