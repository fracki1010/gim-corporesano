
import "./styles/card-style.css"
import { CardExercise } from "./component/card"

function App() {
  return (
    <>
      <div className=" bg-black flex ">
        <section className="flex w-full p-5 gap-3 flex-col bg-red-600 ">
          <CardExercise  title={'CMJ'} ></CardExercise>
          <CardExercise  title={'CMJ'} ></CardExercise>
          <CardExercise  title={'CMJ'} ></CardExercise>
          
        </section>
      </div>
    </>
  )
}

export default App
