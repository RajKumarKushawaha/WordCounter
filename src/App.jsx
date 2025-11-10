import About from "./components/About"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"



function App() {

  return (
    <>
     <Navbar/> 
     <div className="container">
      <TextForm heading="Start writing to get word and character stats."/>
     </div>
    </>
  )
}

export default App
