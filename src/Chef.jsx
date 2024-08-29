import "../styles/main.css"
import { useState } from "react";

export default function Chef (props) {
  
  const [showBook, setShowBook] = useState(false);
  const [showBooked, setShowBooked] = useState(false);

  const handleClick = () => {
    setShowBook(true);
  };

  const handleClick2 = () => {
    setShowBook(false);
    setShowBooked(true);
  };

  return (
    <div className="chef-details-container">
      <img src={props.img} alt="" />
      <p>{props.name}</p>
      <p>Style: {props.style}</p>
      <p>Avg Rating: {props.rating}</p>
      {showBook && (
        <div >
          <input className="input-date" type="date"/>
          <button className="book-now-button" onClick={handleClick2}>Book Now</button>
        </div>
      )}
      {!showBook && !showBooked && (
        <button className="book-button" onClick={handleClick}>Book</button>
      )}
      {showBooked && (
        <div className="booked-info">
            <img src="../images/Tick-Mark.png" alt="" />
            <p>Booked</p>
        </div>
      )}
    </div>
  )
}