import { StyledStats } from "./styles/Stats";

const Stats = ({ points, record }) => {
  return (
    <StyledStats>
      <div>Record: {record}</div>
      <div> Points: {points}</div>
    </StyledStats>
  );
};
export default Stats;
