import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        setText(text.toUpperCase());
    }

    const handleLowClick = () => {
        setText(text.toLowerCase());
    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleClear = () => {
        if (text.length === 0) {
            alert("Nothing to clear!");
        } else {
            setText("");
            alert("Text cleared!");
        }
    }


    return (
        <>
            <div className='my-4'style={{color:props.mode==='grey'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3 my-3">
                    <textarea value={text} onChange={(e) => setText(e.target.value)} style={{backgroundColor:props.mode==='grey'?'grey':'white',color:props.mode==='grey'?'white':'black'}} className="form-control" id="myBox" rows="7" placeholder='Type or paste your text here...'></textarea>
                </div>
                <button type="button" onClick={handleUpClick} className="btn btn-info">Convert to UpperCase</button>
                <button type="button" onClick={handleLowClick} className="btn btn-info mx-3" >Convert to LowerCase</button>
                <button type="button" onClick={handleClear} className="btn btn-info">ClearText</button>
                <button type="button" onClick={handleCopy} className="btn btn-info mx-3">Copy Text</button>

            </div>

            <div className={`container my-4 p-4  rounded shadow-sm"bg-${{backgroundColor:props.mode==='dark'?'grey':'white'}}`}>
                <h2 className="text-primary mb-3">Your Text Summary</h2>
                <p className="fs-5"style={{color:props.mode==='grey'?'white':'black'}} >
                    <b>{text.split(/\s+/).filter((element)=>{ return element.length !== 0}).length}</b> Words and <b>{text.length}</b> Characters
                </p>

                <p style={{color:props.mode==='grey'?'white':'black'}}>
                    🕒 Estimated Reading Time:{" "}
                    <b>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes</b>
                </p>

                <div className="border-top pt-3">
                    <h5 className="text"style={{color:props.mode==='grey'?'white':'black'}}>Preview:</h5>
                    <p style={{color:props.mode==='grey'?'white':'black'}}>{text.length > 0 ? text : "Enter something above to preview it here."}</p>
                </div>
            </div>
        </>
    )
}

export default TextForm
