import { useState } from "react"
import { Button } from "react-bootstrap"

function Counter2() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div className="container my-5" >
            <h4>Counter</h4>
            <p className="fs-1 fw-bolder">{count}</p>
            <Button variant="dark" size="xm" onClick={() => setCount(count + 1)}>
                Click me
            </Button>
            <br/><br/>
            <p>Last click: {new Date().toLocaleString()}</p>
        </div>
    );
}

export default Counter2