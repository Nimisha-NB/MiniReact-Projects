

//rfc(react component form)
import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleDownClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("Uppercase was clicked");
        setText(event.target.value);
    }

    const handleReverseClick = () =>{
        let newText = text.split("").reverse().join('');
        setText(newText);
    }
   

const [text, setText] = useState("");
// const [isBold,setisBold] = useState("");

// setText("new Text");


  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" placeholder="Enter you text" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 btn-success" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 btn-success" onClick={handleDownClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 btn-success" onClick={handleReverseClick}>Reverse</button>
        {/* <button className="btn btn-primary mx-2 btn-success" onClick={handleBoldClick}>Bold</button> */}
    </div>
    <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter(word => word!== "").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter(word => word!== "").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
