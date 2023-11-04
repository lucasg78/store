import { useState } from "react"

const Counter = () => {

    let [contador, setContador] = useState(1)

    const incrementar = () => {
        setContador( contador + 1 )
    }

    return (
        <div className="container my-5" onClick={incrementar}>
            <hr/>
            <h4>Counter</h4>
            <p>{contador}</p>
        </div>
    )
}

export default Counter