import { Card } from "./component/card"
import "./styles/card-style.css"
import cards from "./data/data.js"

  let listCards = cards

function App() {
  return (
    <>
      <div>
        <section className="page card-1-page">
          <div className="cards">
          {listCards.map((e) => <Card card={e}></Card>)}
          </div>
        </section>
      </div>
    </>
  )
}

export default App
