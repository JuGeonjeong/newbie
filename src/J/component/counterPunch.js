import React, {useState}  from 'react';

function CounterPunch () {
    const [value, setValue] = useState(0);

    const plus = () => {
        setValue(value+1);
    }

    const minus = () => {
        setValue(value-1);
    }

    return (
        <>
            <button onClick={plus}>+</button>
            <h2>{value}</h2>
            <button onClick={minus}>-</button>
        </>
    )
}

export default CounterPunch;