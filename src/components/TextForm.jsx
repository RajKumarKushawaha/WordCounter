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
            <div className='my-4'>
                <h1>{props.heading}</h1>
                <div className="mb-3 my-3">
                    <textarea value={text} onChange={(e) => setText(e.target.value)} className="form-control" id="myBox" rows="7" placeholder='Type or paste your text here...'></textarea>
                </div>
                <button type="button" onClick={handleUpClick} className="btn btn-info">Convert to UpperCase</button>
                <button type="button" onClick={handleLowClick} className="btn btn-info mx-3" >Convert to LowerCase</button>
                <button type="button" onClick={handleClear} className="btn btn-info">ClearText</button>
                <button type="button" onClick={handleCopy} className="btn btn-info mx-3">Copy Text</button>

            </div>

            <div className="container my-4 p-4 bg-light rounded shadow-sm">
                <h2 className="text-primary mb-3">Your Text Summary</h2>
                <p className="fs-5">
                    <b>{text.split(" ").length}</b> Words and <b>{text.length}</b> Characters
                </p>

                <p className="text-muted">
                    🕒 Estimated Reading Time:{" "}
                    <b>{0.008 * text.split(" ").length} Minutes</b>
                </p>

                <div className="border-top pt-3">
                    <h5 className="text-secondary">Preview:</h5>
                    <p>{text.length > 0 ? text : "Enter something above to preview it here."}</p>
                </div>
            </div>
        </>
    )
}

export default TextForm
