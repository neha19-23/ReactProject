import App from './App.jsx'
import { createRoot } from 'react-dom/client'
//import { useState } from "react";
import './index.css'
//import Expressions from "./Expressions.jsx";
//  const myelement = (
//      <table>
//          <tr>
//              <th>Name</th>
//          </tr>
//          <tr>
//              <td>Neha</td>
//          </tr>
//          <tr>
//              <td>Sundeep</td>
//          </tr>
//
//      </table>
//  );
//
// const number = [1,2,3,4];
// const double = number.map(x => x*x);

// function Counter(){
//
//     const [count,setCount] = useState(0);
//     return (
//         <div>
//         <button onClick={()=>setCount(count+1)}>Count : {count}</button></div>
//     );
// }
createRoot(document.getElementById('root')).render(
    <App/>
  //  <Counter/>
)
