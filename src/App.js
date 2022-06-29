import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [inputData,SetinputDAta]=useState('');
  const [dataArray,SetdataArray]=useState([]);  // this is Array state
  const HandleInputData=(e)=>{
    SetinputDAta(e.target.value)
  }

  const SubmitData=()=>{
      dataArray.push(inputData);
      SetdataArray(dataArray);
      SetinputDAta('');
      // storing the data into the localStorage
      localStorage.setItem('Data',(JSON.stringify(dataArray)));
  }
 
  useEffect(()=>{
    // getting stored data from localStorage in dataaaa variable
    const dataaaaa=localStorage.getItem("Data");
    const parsedData=dataaaaa ? JSON.parse(dataaaaa):[];   // if data will be available in array then it will render that data otherwise it will render empty array
    SetdataArray(parsedData);
      
  },[inputData]);
  return (
    <div className="App">
      <h1>UseEffect todo</h1>
      <input type="text
      "placeholder='add your note here'
       onChange={HandleInputData}
       /><button onClick={SubmitData}>add note</button>
       <h1>Your Notes are:</h1>
      {dataArray.map((data,index)=>{
        return(
          <div key={index}>  
            <p>{data}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
