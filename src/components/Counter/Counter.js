import { useState } from "react"

const Counter = () => {
    // Declaro un nuevo estado de la variable, que denomino "contador"
    const [contador, setContador] = useState(0) // Entre () el valor inicial

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