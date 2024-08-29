import Header from "./Header"
import Main1 from "./Main1"

function App() {

  return (
    <>
      <Header></Header>
      <Main1></Main1>
      
        <section className="website-info">
          <div className="website-info-box">
            <img src="../images/trust.jpeg"/>
            Trusted by All
          </div>
          <div className="website-info-box">
            <img src="../images/certified.jpeg"/>
            2000+ Certified Chefs
          </div>
          <div className="website-info-box">
            <img src="../images/moneyback.jpeg"/>
            Moneyback Guarantee
          </div>
        </section>
    </>
  )
}

export default App
