import { useState } from "react"
import { Button } from "react-bootstrap"

function Counter2() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div className="container my-5" >
            <p>You clicked {count} times</p>
            <Button variant="dark" size="xm" onClick={() => setCount(count + 1)}>
                Click me
            </Button>
        </div>
    );
}

export default Counter2