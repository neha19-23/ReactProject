import { useState} from 'react'
import {Expressions} from "./Expressions.jsx";
import {ShowText} from "./ShowText.jsx";
import {ColorChange} from "./ClassDemo.jsx";
import {Home} from "./RoutingDemo.jsx";
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
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
    else if(count === 10){
        alertMessage();
        content=undefined;
    }
    else
        content = <ShowText name={name}/>
    return (
        <>
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link> | {" "}
                <Link to="/classDemo">Color Change</Link> | {" "}
                <Link to="/expressions">Expression</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/classDemo" element={<ColorChange favColor="Yellow" />}/>
                <Route path="/expressions" element={<Expressions valv={2} />}/>
            </Routes>
        </BrowserRouter>
        <div>
            {content}
        <button onClick={()=>setCount(count+1)}>Count : {count}</button></div>
        </>


    );

}
export default App;