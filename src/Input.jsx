import React from 'react'
//import colorNames from 'colornames';//after installation this will work

const Input = ({ colorValue, setColorValue, 
                setHexValue, isDarkText, setIsDarkText }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Add Color Name:</label>
        <input
            autoFocus
            type='text'
            placeholder='Add Color Name'
            required
            value={colorValue}
            onChange={(e) => {
                setColorValue(e.target.value);
                //import colornames through npm and do this below
                //setHexValue(colorNames(e.target.value));
            }}
        />
        <button
            type='button'
            onClick={() => setIsDarkText(!isDarkText)}
        >
            toggle text color
        </button>
    </form>
  )
}

export default Input