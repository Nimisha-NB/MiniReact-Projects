

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
const [text, setText] = useState("");
// setText("new Text");


  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" placeholder="Enter you text" value={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary btn-success" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3 btn-success" onClick={handleDownClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-4">
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter(word => word!== "").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter(word => word!== "").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
