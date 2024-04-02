import React, { useState } from 'react'
var teste = 8

const Form = () => {
    const handleyMyEvent = () => {

        console.log("Ativou o evento")
    }
    const [x, setX] = useState(true)
    return (
        <>
            <div>
                <div>
                    <button onClick={handleyMyEvent}>Clique Aqui</button>
                </div>
                <div>
                    <button onClick={() => { console.log("Yes! Apertou em mim.") }}> Clica em mim também!</button>
                </div>
                <div>
                    <button onClick={() => {
                        if (true) {
                            console.log("Isso não deveria acontecer!")
                        }
                    }}> Sera que você clicaria aqui?</button>
                </div>
                <div>
                    <h1>{x ? 'Renderizou' : 'Deu ruim não foi'} </h1>
                    <button onClick={() => setX(!x)}> Valida x</button>
                </div>
            </div>
            <div>
                <strong>Valor:</strong>{teste}
                <button onClick={() => { teste = 12; console.log(teste) }}>Aperte e mude</button>
                <strong>Valor:</strong>{teste}
            </div>
        </>

    )
}

export default Form