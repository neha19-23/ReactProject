import {useState } from 'react-dom/client'
function App(){
    // const v = ['mustang','Activa','Honda'];
    // let [car,bike,cycle] =v;
    // return (
    //     <div className="App">
    //         <h1>Car name {car}. Bike name {bike}. Cycle name {cycle}</h1>
    //     </div>
    // );

    const [count,setCount] = useState(0);
    return (
        <button onClick={()=>setCount(count+1)}>Count : {count}</button>
    );
}
export default App;