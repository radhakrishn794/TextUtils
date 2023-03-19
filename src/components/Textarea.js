import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function Textarea(props) {
  const [text, setText] = useState('');
  const clickedUp = () => {
    setText(text.toUpperCase());
    props.showAlert("converted to uppercase","success");
  }
  const clickedLow = () => {
    setText(text.toLowerCase());
    props.showAlert("converted to lowercase","success");
  }
  const capitalize = () => {
    let firstLetter = text.slice(0, 1);
    setText(firstLetter.toUpperCase() + text.slice(1));
    props.showAlert("text capitalized","success");
  }
  const clearText = () => {
    setText('');
    props.showAlert("text cleared","success");
  }
  const replaceWord = () => {
    let old = prompt("Enter the word you want to replace");
    let newWord = prompt("Enter the new word");
    setText(text.replace(old, newWord));
    props.showAlert("word replaced","success");
  }
  const handleChange = (event) => {
    setText(event.target.value);
  }
  return (
    <>
      <div className='page'>
        <div className='container '>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea className={`form-control bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'dark':'light'}`} id="myBox" value={text} onChange={handleChange} rows="6" placeholder='Enter Text Here'>
            </textarea>
          </div>
          <button className={`btn btn-${props.mode==='light'?'primary':'success'} mx-3`} onClick={clickedUp}>Convert To Uppercase</button>
          <button className={`btn btn-${props.mode==='light'?'primary':'success'} mx-3`} onClick={capitalize}>Convert To Capitalise</button>
          <button className={`btn btn-${props.mode==='light'?'primary':'success'} mx-3`} onClick={clickedLow}>Convert To Lowercase</button>
          <button className={`btn btn-${props.mode==='light'?'primary':'success'} mx-3`} onClick={clearText}>Clear Text</button>
          <button className={`btn btn-${props.mode==='light'?'primary':'success'} mx-3`} onClick={replaceWord}>Replace Word</button>
        </div>
        <div className='container my-3'>
          <h1>Your Text Summary...</h1>
          <p>{text.length} Characters {text.split(' ').length} Words<br />Can be read in {0.008 * text.split(' ').length} minutes</p>
        </div>
      </div>
    </>
  )
}
Textarea.propTypes = {
  heading: PropTypes.string
};
Textarea.defaultProps = {
  heading: "Enter Text Please"
}