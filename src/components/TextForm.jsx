import React, { useState } from 'react'

function TextForm(props) {

    const[text, setText] = useState("");

    const handleUpClick = () => {
        setText(text.toUpperCase());
    }

    const handleLowClick = () => {
        setText(text.toLowerCase());
    }

    const handleClear = () =>{
        setText("");
    }

    return (
        <>
        <div className='my-4'>
            <h1>{props.heading}</h1>
            <div className="mb-3 my-3">
                <textarea value={text} onChange={(e)=>setText(e.target.value)} className="form-control" id="myBox" rows="7" placeholder='Type or paste your text here...'></textarea>
            </div>
            <button type="button" onClick={handleUpClick} className="btn btn-info">Convert to UpperCase</button>
            <button type="button" onClick={handleLowClick} className="btn btn-info mx-3" >Convert to LowerCase</button>
            <button type="button" onClick={handleClear} className="btn btn-info">ClearText</button>
        </div>

        <div className="container">
            <h2>Your Text Summary</h2>
            <p><b>{text.split(" ").length}</b> Word and <b>{text.length}</b> Characters</p>
            <p>{0.008*text.split(" ").length} Minute read</p>
        </div>
        
        </>
    )
}

export default TextForm
