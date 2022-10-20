export function mega(quantidade = 6, numeros = []){
    let qtde = +quantidade //convertendo para numero
    if(qtde < 6 && qtde > 60){
        throw "Quantidade inválida!"
    }

    if(numeros.length === qtde){
        return numeros.sort((n1, n2) => n1 - n2) //ordenando de forma crescente
    }

    const numeroAleatorio = parseInt(Math.random() * 60) + 1
    if(!numeros.includes(numeroAleatorio)){
        return mega(qtde, [...numeros, numeroAleatorio])  //...numeros - uma forma de clonar o array 
    }else{
        return mega(qtde, numeros)
    }
}

