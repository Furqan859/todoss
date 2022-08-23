import React, { useState } from 'react';
import Eitbutton from './component/Eitbutton';
import './App.css';

function App() {
  const [getdata, setGetData] = useState();
  const [array, setArray] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!getdata) {
      alert("Task to be added should not be empty!")
    } else {
      const data = getdata;

      setArray((a) => [data, ...a]);

      setGetData("")

    }


  }

  const handleEdit = () => {
    
  }

  const deleteButton = (e) => {
   
    console.log(e.target.value)
    const List = [...array];
    List.splice(e.target.value, 1);
    setArray(List);
    console.warn(List)
  }
 

  return (
    <div className="App">
      <div>
        <input onChange={(e) => setGetData(e.target.value)} value={getdata} />
        <button onClick={handleSubmit}>Add Me</button>
      </div>


      <div>

        {array.map((value, index) =>
          <div>{value}  {index}
            <br />
            <button onClick={handleEdit} value={value}>Edit</button> <br />
            <button onClick={deleteButton} value={index}>Delete{index}</button>
          </div>
        )}

      </div>

    </div>
  );
}

export default App;
