import { useState } from "react"

const Counter = () => {
    
    const [contador, setContador] = useState({
        contador: 1,
        fyh: new Date()
    })

    const incrementar = () => {
        setContador({
            contador: contador.contador + 1,
            fyh: new Date()
            })
    }

    console.log(contador)

    return (
        <div className="container my-5" onClick={incrementar}>
            <hr/>
            <h4>Counter</h4>
            <p className="fs-1 fw-bolder">{contador.contador}</p>
            <p>Fecha y hora del último click: {contador.fyh.toLocaleString()}</p>
        </div>
    )
}

export default Counter