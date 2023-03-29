import classNames from 'classnames';
import './Square.css'
const Square = ({value, onClick, move, winner}) => {

const  handleClick = () => {
    (move !== null && value === null) && onClick();
}
let squareClass = classNames({
    square: true,
    [`square--${value}`]: value !== null,
    winner: winner, 

});
  return (
     <div className={squareClass} onClick={() => handleClick()}>

  </div>
  )
}
export default Square;