
import './App.css';
import {useState} from 'react'

import Tweets from './Tweets';



function App() {
  const [counter, setCounter] = useState(0);

  const name = 'White';
  const age = '26';

  const handleBackground = (e) => {
    e.preventDefault();
  }

  return (
    <div style={{backgroundColor: 'red'}}>
    <div className="App" >
        <p>{counter}</p>
        <button onClick={() => {setCounter(counter +100)}}>Increase </button>
        <button onClick={() => {setCounter(counter -100)}}>Decrease </button>

        <Tweets me={name} age = {age} counter={counter} />
        <form >
          <input type="text" onChange={this.handleBackground}/>
          <button>Change background</button>
        </form>
   
    </div>
    </div>
  
  );
}

export default App;
