import { useState } from "react"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('grey');
      document.body.style.backgroundColor='grey';
    }
    else {
      setMode('light');
            document.body.style.backgroundColor='white';

    }
  }

  return (
    <>
      <Navbar mode={mode}  toggleMode={toggleMode}/>
      <div className="container">
        <TextForm heading="Start writing to get word and character stats." mode={mode}/>
      </div>
    </>
  )
}

export default App
