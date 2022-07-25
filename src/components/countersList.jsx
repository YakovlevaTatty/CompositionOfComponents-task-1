import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id:0, value: 0, name: "Ненужная вещь"}, 
        {id:1, value: 0, name: "Ложка"}, 
        {id:2, value: 0, name: "Вилка"},
        {id:3, value: 0, name: "Тарелка"},
        {id:4, value: 0, name: "Набор минималиста"},
    ];
    const [counters, setCounters] = useState(initialState);
    const handleDelete = (id) => {
        const newCounters = counters.filter((element) =>element.id!==id);
        setCounters(newCounters);
    };
    const handleIncrement = (id) => {
        const newIncrement = counters.filter((element) => element.id===id ? element.value+=1 : element);
        setCounters(newIncrement);
       };
       const handleDecrement = (id) => {
        const newDecrement = counters.filter((element) => element.id===id ? element.value-=1 : element);
        setCounters(newDecrement);
       };
    const handleReset = () => {
        setCounters(initialState);
    };
    return (
    <>
    {counters.map((count) => (
        <Counter 
        key={count.id}
        {...count}
        onDelete={handleDelete}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}/>
    ))}
    <button className="btn btn-primary btn-sm m-2" onClick={handleReset}> Reset </button>
    </>
    )
}

export default CountersList;