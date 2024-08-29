import "../styles/header.css"
import "../styles/general.css"

export default function Header () {
   return (
    <>
      <header className = "header">
        <div className = "left-section">
          <img src="../images/title-logo.webp" className="title-logo"/>
          <p className="title">YourCook</p>
        </div>
        <div className="middle-section">
          <input type="text" placeholder="Search City, Chefs" className="input-area"/>
        </div>
        <div className="right-section">
          <div className="profile-options">My Cooks</div>
          <div  className="profile-options">Go Pro</div>
          <div className="profile-options">Profile</div>
        </div>
      </header>
    </>
   )
}