import React from 'react'
var teste = 8

const Form = () => {
    const handleyMyEvent = () => {
        
        console.log("Ativou o evento")
    }
    const renderButton = (x) =>{
        if(x) {
            return <h1> Redenrizou bonitinho!</h1>
        } else {
            return <h1>Rederizou Lindinho!</h1>
        }
    }
  return (
    <>
        <div>
        <div>
            <button onClick={handleyMyEvent}>Clique Aqui</button>
        </div>
        <div> 
            <button onClick={() => {console.log("Yes! Apertou em mim.")}}> Clica em mim também!</button>
        </div>
        <div>
           <button onClick={() => {
               if (true) { 
                    console.log("Isso não deveria acontecer!")            
                }
        }}> Sera que você clicaria aqui?</button> 
        </div>
        <div>
            {renderButton(true)}
            {renderButton(false)}
        </div>      
    </div>
    <div>
        <strong>Valor:</strong>{teste}
        <button onClick={() =>{teste=12; console.log(teste)}}>Aperte e mude</button>
        <strong>Valor:</strong>{teste}
    </div>
    </>

  )
}

export default Form