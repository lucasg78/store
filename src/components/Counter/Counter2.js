import { useState } from "react"

function Counter2() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div className="container my-5" >
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <p>Fecha y hora del último click: {new Date().toLocaleString()}</p>
        </div>
    );
}

export default Counter2