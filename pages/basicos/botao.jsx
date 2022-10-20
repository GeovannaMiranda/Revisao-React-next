function acao1() {
    console.log("acao1");
}

export default function botao() {

    function acao2() {
        console.log("acao2");
    }

    function acao5(e) {
        console.log(e);
    }
    return (
        <div>
            <button onClick={acao1} >Clique 01</button>
            <button onClick={acao2} >Clique 02</button>
            <button
                onClick={function () {
                    console.log("acao3");
                }} >
                Clique 03
            </button>
            <button onClick={() => console.log("acao4")} >Clique 04</button>
            <button onClick={acao5} >Clique 05</button>
            <button onClick={e => acao5(e.altKey)} >Clique 05</button>

            <div>
                <input type="text" onChange={e => console.log(e.target.value)} />
            </div>
        </div>
    )
}