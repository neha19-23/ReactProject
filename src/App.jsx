import {useState } from 'react'
import {Expressions} from "./Expressions.jsx";
import {ShowText} from "./ShowText.jsx";
import {ColorChange} from "./ClassDemo.jsx";
function App(){
    // const v = ['mustang','Activa','Honda'];
    // let [car,bike,cycle] =v;
    // return (
    //     <div className="App">
    //         <h1>Car name {car}. Bike name {bike}. Cycle name {cycle}</h1>
    //     </div>
    // );
    function alertMessage(){
        alert("U have reached count 10");
    }

    let content;
    let name = "Avi";

    const [count,setCount] = useState(0);
    if(count ===1){
        content = <Expressions valv={5}/>
    }
    else if(count === 5)
        content = <ColorChange favColor="green" />
    else if(count === 10)
        content = alertMessage();
    else
        content = <ShowText name={name}/>
    return (
        <div>
            {content}
        <button onClick={()=>setCount(count+1)}>Count : {count}</button></div>
    );

}
export default App;