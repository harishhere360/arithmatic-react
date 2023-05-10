
import './App.css';
import { useState } from 'react';

function App() {
  
   const[firstnumber,setfirstnumber] = useState(0);
   const[secondnumber,setsecondnumber] = useState(0);
   const[result,setResult] = useState(0);
   let doCalculation=(type)=>{
    switch (type){
      case "add":
        setResult(Number(firstnumber)+Number(secondnumber));
        break;
       case "subtarct":
        setResult(Number(firstnumber)-Number(secondnumber));
        break;
      case "multiply":
        setResult(Number(firstnumber)*Number(secondnumber));
          break;
      default:
          throw new Error("use valid opreation");
          

    }
   };
   return(

   <div>

    <form onSubmit={(e)=>e.preventDefault()}>
      
    <input type={"number"}placeholder={"enter 1st number"} onChange={(e)=>{setfirstnumber(e.target.value)}} value={firstnumber}/>
    <input type={"number"}placeholder={"enter 2st number"} onChange={(e)=>{setsecondnumber(e.target.value)}} value={secondnumber}/>

    <button onClick={()=>doCalculation("add")}>add</button>
    <button onClick={()=>doCalculation("subtarct")}>subtarct</button>
    <button onClick={()=>doCalculation("multiply")}>multiply</button>
<h4>result is:{result}</h4>
    </form>
  
   </div>

  );
}

export default App;
