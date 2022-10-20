// Desafior criar um contador 

import { useState } from "react";
import NumeroDisplay from "../../components/NumeroDisplay";

export default function contador() {

    const [numero, setNumero] = useState(0)

    function decrementa() {
        setNumero(numero - 1)
    }

    function incrementa() {
        setNumero( numero + 1)
    }

    const estilo = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",

    }

    return (
        <div style={estilo}>
            <h1>Contador</h1>
            <NumeroDisplay numero={numero} />

            <div>
                <button onClick={decrementa}>-</button>
                <button onClick={incrementa}>+</button>
            </div>

        </div>
    )
}