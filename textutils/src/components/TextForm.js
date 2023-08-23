import React,{useState} from 'react'

export default function TextForm(props) {
  const[text, setText] = useState('');
  // text="new text"; wrong
  // setText("new text"); correct
  const handleUpClick= ()=>{
   // console.log("Uppercase was clicked " + text); debugging
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  }
  const handleLoClick= ()=>{
    // console.log("Uppercase was clicked " + text); debugging
     let newText = text.toLowerCase();
     setText(newText);
     props.showAlert("Converted to LowerCase", "success");

  }
  
  const handleClearClick= ()=>{
    // console.log("Uppercase was clicked " + text); debugging
     let newText = '';
     setText(newText);
     props.showAlert("Cleared", "success");
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleCopy =()=> {
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  }

  const handleExtraSpaces=() =>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed", "success");

  }

  const handleOnClick= (event)=>{
   // console.log("OnChange"); for debugging to check on console
    setText(event.target.value);
  }
  

  return (
    <>
    <div className="container" style={{color: props.mode==='dark' ?'white':'black'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnClick} style={{backgroundColor: props.mode==='dark' ?'grey':'white', color: props.mode==='dark' ?'white':'black'}}id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove  Extra space</button>

    </div>
    <div className="classname my-3" style={{color: props.mode==='dark' ?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p> {text.split(" ").length} words {text.length} Characters</p>
      <p>{0.008* text.split(" ").length} Minutes To Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
