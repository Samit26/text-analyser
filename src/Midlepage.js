
import React,{useState} from 'react'
import './Midlepage.css';



export default function Midlepage(props) {

    const [Text, setText] = useState('Enter Text Here');

    const handleUpClick=() => {
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLoClick=() => {
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleClear=() => {
        
        setText("");
        props.showAlert("Text Clear Successful", "success");
    }

    const handleSpace = () => {
      const newText = Text.replace(/\s+/g, ' ');
      setText(newText.trim());
      props.showAlert("Done", "success");
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(Text)
      .then(() => {
        props.showAlert("Successfully copied to clipboard", "success");
      })
      .catch(error => {
      props.showAlert("Error copying text", "danger");
      });
  };


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
  <button type="button" onClick={handleSpace} className="btn btn-primary mb-3" id='Clear_btn'>Remove Extra Space</button>
  <button type="button" onClick={handleCopy} className="btn btn-primary mb-3" id='Clear_btn'>Copy Text</button>

  </div>

  <div className='container'>
    <h4>Your text has {Text.trim() === "" ? 0 : Text.trim().split(" ").length} Words and {Text.length} Characters</h4>
  </div>
   
   <div className='container'>
    <h4>Average time to read this text is {(Text.length/183).toFixed(2)} minutes.</h4>
   </div>

   </>
  );
}
