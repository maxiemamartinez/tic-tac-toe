import "./Scoreboard.css";

const Scoreboard = ({ scoreX, scoreO }) => (
  <div className="scoreboard">
    <div>{scoreX}</div>
    <div>{scoreO}</div>
  </div>
);
export default Scoreboard;
