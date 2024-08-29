import "../styles/main.css"
import Chef from "./Chef"

export default function Recommended () {
  return (
    <>
      <section className="recommended-section">
        <div>Recommended</div>
          <div className="chef-recommended-grid">
          <Chef name="Gordon Ramsey" img="../images/Gordon-Ramsay-removebg-preview.png"  style="British" rating={4.9}></Chef>
          <Chef name="Jamie Oliver" img="../images/Jamie-Oliver.png" style="American" rating={4.8}></Chef>
          <Chef name="Salt Bae" img="../images/Salt-Bae-removebg-preview.png" style="Italian" rating={3.4}></Chef>
          <Chef name="David Chang" img="../images/David-Chang.png" style="Chineese" rating={4.76}></Chef>
          <Chef name="Rachael Ray" img="../images/Rachael Ray.png" style="American" rating={4.23}></Chef>
          <Chef name="Sanjeev Kapoor" img="../images/Sanjeev-Kapoor.png" style="Indian" rating={4.88}></Chef>
        </div>
      </section>
    </>
  )
}