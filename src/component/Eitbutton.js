import React from 'react';

export default function Eitbutton(props) {
    const {value} = props;

    console.warn(value);
  return (<div>
              
        <input type='text' value={value} />
        <button>Save</button>
          
  </div>)
}
