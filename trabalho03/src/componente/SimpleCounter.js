import React, { useState } from 'react';

function SimpleCounter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        console.log(count);
        setCount(count + 1)
    };

    const decrement = () => {
        console.log(count);
        setCount(count - 1)
    };

    return(
        <div className="simple-counter">
            <p>Contador: {count} </p>
            <button onClick={increment}> Incrementar </button>
            <button onClick={decrement}> Decrementar </button>
        </div>
);
};

export default SimpleCounter;