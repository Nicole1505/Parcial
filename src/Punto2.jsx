import { useState } from "react";

export const Punto2 =()=>{
    const [min, setmin]= useState("") // Segundos 
    
    
    const Calcular =()=> {
        let Pago = 100

        if (min >= 3) {
        Pago += (min - 3) * 50;
    }    
        console.log(Pago)
    } 

    
    const TomarMin =(e)=>{
        setmin(e.target.value)
    }
    return(
        <>
        <h1>
         Llamadas
        </h1>
        <input
        type="number"
        placeholder = "ingresar Minutos"
        value={min}
        onChange={(even)=> TomarMin(even)}>
        </input>
        <button onClick={()=> Calcular()}> Calcular </button>
        </>
    )
}

