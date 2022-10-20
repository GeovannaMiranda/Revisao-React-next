export default function SomaUm(props){
    //props.numero++  Não deve ser assim pois props é somente leitura
    return(
        <div>
            <h1>{props.numero + 1}</h1>
        </div>
    )
}