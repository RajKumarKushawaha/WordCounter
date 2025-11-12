import React, { useState } from "react"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import About from "./components/About"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('grey');
      document.body.style.backgroundColor = 'grey';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <div className="container">
          <Routes>
            <Route path='/about' element={<About mode={mode} />} />
            <Route path='/' element={<TextForm heading="Start writing to get word and character stats." mode={mode} />} />
          </Routes>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App
