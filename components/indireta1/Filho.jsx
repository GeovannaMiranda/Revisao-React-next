export default function Filho(props){
    console.log(props.funcao);

    return(
        <div>
            <h1>Componente Filho</h1>
            <button onClick={props.funcao} >Falar com o pai #01</button>
            <button onClick={() => props.funcao("Passei no Enem!", "UUHHHUUU", "10")}>Falar com o pai #02</button>
        </div>
    )
}