import {useState } from 'react'
import {Expressions} from "./Expressions.jsx";
import {ShowText} from "./ShowText.jsx";
function App(){
    // const v = ['mustang','Activa','Honda'];
    // let [car,bike,cycle] =v;
    // return (
    //     <div className="App">
    //         <h1>Car name {car}. Bike name {bike}. Cycle name {cycle}</h1>
    //     </div>
    // );

    let content;

    const [count,setCount] = useState(0);
    if(count ==1){
        content = <Expressions/>
    }
    else
        content = <ShowText/>
    return (
        <div>
            {content}
        <button onClick={()=>setCount(count+1)}>Count : {count}</button></div>
    );

}
export default App;