import {useState, useTransition} from "react";
export function SearchBar(){
    const [text,setText]=useState("");
    const [isPending,startTransition]=useTransition();
    const lst = ['Ford', 'BMW', 'Audi','Honda','Hyundai'];
    const [items,setItems] = useState([]);

    const handleChange = (e) => {
        setText(e.target.value);
        startTransition(() => {
            const filteredItem = lst.filter((car) =>
                  car.toLowerCase().includes(e.target.value));
            setItems(filteredItem);
        })

    }

    return(
        <>
            Search Car :
            <input value={text} onChange={handleChange} placeholder="Type here..."/>
            {isPending && <p>Loading results...</p>}
            <div>
                {items.map((item) => (<li key={item}>{item}</li>))}
            </div>
            <div></div>
        </>
    );
}