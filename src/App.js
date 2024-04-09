import './App.css';
import { useEffect, useState } from 'react';

function App() {
 
     const [advice, setAdvice] = useState("");

    useEffect(() => {
      getAdvice();
    }, []);

     const getAdvice = async () => {
      const responce = await fetch("https://api.adviceslip.com/advice ")
      const data = await responce.json();
      setAdvice(data.slip.advice)
     }
      getAdvice();


   return(
    <div className="App">
      <h1>Find your daily advice here!!!</h1>
      <p>{advice}</p>  
      <button onClick={getAdvice}>Get New Advice</button>
    </div>
   )
}
  export default App;



