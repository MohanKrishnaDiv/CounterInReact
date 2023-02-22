import './App.css';
import {useState} from 'react'
import Child from './Child'

function App() {
  const [count, setCount] = useState(0);
  const [inputData, setInputData] = useState("");
  const handler = e => {
    setInputData(e.target.value)
  }
  return (
    <div className="App">
      
      <h2> The count value is {count}</h2>
      <div className='bts'>
        <button onClick={() => setCount(count -1)}>Decrement</button>
        <button onClick={() => setCount(count*0)}>Reset</button> 
        <button onClick={() => setCount(count +1)}>Increment</button> 
      </div>  
    <br />
    <input type="text" value={inputData} onChange={handler} placeholder="Give any input"/>
    <br />
    <div >
    <Child className="child" countValue = {count} inputData = {inputData}/>
    </div>
    <br />
    <div> The input given is : {inputData} </div>

    </div>
  );
}

export default App;
