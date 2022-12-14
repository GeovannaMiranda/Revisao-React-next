//Formas de import e exports


export function Comp1() {
    return <h2>Comp1</h2>
}

export const Comp2 = function () {
    return <h2>Comp2</h2>
}

export default function () {
    return (
        <div>
            <h2>Comp #03</h2>
        </div>
    )
}


export const Comp4 = () => {
    <h2>Comp #04</h2>
} 

const Comp5 = () => <h2>Comp #05</h2>

const Comp6 = props => (
    <div>
        <h2>Comp #06  - {props.msg} </h2>
    </div>
)

export {
    Comp5, Comp6
}