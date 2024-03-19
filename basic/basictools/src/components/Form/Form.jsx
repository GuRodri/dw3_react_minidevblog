import React from 'react'
var teste = 8

const Form = () => {
    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Ativou o Evento!")
    }
    const rederButton = (x) => {
        if (x) {
            return <h1>Renderizou Bonitinho!</h1>
        } else {
            return <h1>Renderizou Lindinho!</h1>
        }
    }
    return (
        <>
            <div>
                <div>
                    <button onClick={handleMyEvent}>Clique Aqui</button>
                </div>
                <div>
                    <button onClick={() => { console.log("Yes! Apertou em mim!") }}>Clique em mim também</button>
                </div>
                <div>
                    <button onClick={() => {
                        if (true) {
                            console.log("Isso não deveria acontecer!")
                        }
                    }}>Será que você clicaria aqui?</button>
                </div>
                <div>
                    {rederButton(true)}
                    {rederButton(false)}
                </div>
            </div>
            <div>
                <strong>Valor:</strong>{teste}
                <button onClick={() => { teste = 12; concole.log() }}>Aperte e mude</button>
                <strong>Valor:</strong>{teste}
            </div>
        </>

    )
}

export default Form