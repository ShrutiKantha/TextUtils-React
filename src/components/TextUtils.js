import React, {useState} from 'react'

export default function TextUtils(props) {
    const [text, setText] = useState('Enter text here');
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleOnClickUp=()=>{
        setText(text.toUpperCase());
        props.showAlert('success', 'Converted to UpperCase')
    }
    const handleOnClickLo=()=>{
        setText(text.toLowerCase());
        props.showAlert('success', 'Converted to LowerCase')
    }
    const handleOnClickClear=()=>{
        setText('');
        props.showAlert('success', 'Text Cleared')
    }
    const handleOnClickCopy=()=>{
        var copytext=document.getElementById("exampleFormControlTextarea1");
        copytext.select();
        navigator.clipboard.writeText(copytext.value);
        props.showAlert('success', 'Copied to Clipboard!')
    }
    const RemoveExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('success', 'Removed Extra Spaces')
    }
  return (
    <div>
        <div className="mx-5 my-5">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
            <button type="button" className="btn btn-primary mx-2 my-3" onClick={handleOnClickUp}>Convert to UpperCase</button>
            <button type="button" className="btn btn-primary mx-2 my-3 " onClick={handleOnClickLo}>Convert to LowerCase</button>
            <button type="button" className="btn btn-primary mx-2 my-3" onClick={handleOnClickClear}>Clear Text</button>
            <button type="button" className="btn btn-primary mx-2 my-3" onClick={handleOnClickCopy}>Copy Text</button>
            <button type="button" className="btn btn-primary" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{text.split(" ").length*0.008} Minutes read</p>
            <h1>Preview</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}
