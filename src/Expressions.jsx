import {useState} from "react";

function evals(val){
    return val*val;
}
export function Expressions({valv}){
    const [horseP,setHorseP] = useState(0);
    //const vari =evals(valv);
    return (
      <>
          Calculate horsepower
          <input type="text" onChange={(event)=> setHorseP(evals(event.target.value))}/>

          <p>This is car</p>
          {/*<p>with {evals(3)} horsepower</p>*/}
          <p> with {horseP} horsepower</p>
      </>
    );
}