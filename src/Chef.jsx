import "../styles/main.css"

export default function Chef (props) {
  
  return (
    <div className="chef-details-container">
      <img src={props.img} alt="" />
      <p>{props.name}</p>
      <p>Style: {props.style}</p>
      <p>Avg Rating: {props.rating}</p>
      <button className="book-button">Book Now</button>
    </div>
  )
}