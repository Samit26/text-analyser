
import React,{useState} from 'react'
import './Midlepage.css';


export default function Midlepage() {

    const [Text, setText] = useState('Enter Text Here');

    const handleUpClick=() => {
        let newText = Text.toUpperCase();
        setText(newText);
    }

    const handleLoClick=() => {
        let newText = Text.toLowerCase();
        setText(newText);
    }

    const handleClear=() => {
        
        setText("Enter Text Here");
    }

    const handleOnChange=(event) => {
         setText(event.target.value)
    }
  return (
   <>
   <div className="mb-3">
  {/* <label htmlFor="exampleFormControlTextarea1" className="form-label "><h3>Enter your text below</h3></label> */}
  <textarea className="form-control mb-3 text98" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  

  <button type="button" onClick={handleUpClick} className="btn btn-primary mb-3" id='Upper_btn'>Upper Case</button>
  <button type="button" onClick={handleLoClick} className="btn btn-primary mb-3" >Lower Case</button>
  <button type="button" onClick={handleClear} className="btn btn-primary mb-3" id='Clear_btn'>Clear All</button>

  </div>

  <div className='container'>
    <h4>Your text has {Text.split(" ").length} Words and {Text.length} Characters</h4>
  </div>


   </>
  );
}
