import { useState } from "react";

export const Punto1 = () =>{
    
    const [TiempoC, setTiempoC]= useState("") // Conversión
    const [segundo, setSegundos]= useState("") // Segundos 
    
    
    const Convertir =()=> {
        const totalSegundos = parseInt(segundo);

        const Horas = Math.floor(totalSegundos / 3600);
        const minutos = Math.floor((totalSegundos % 3600) / 60);
        const segundos = totalSegundos % 60;
    
        setTiempoC(`${Horas} horas, ${minutos} minutos y ${segundos} segundos`)
        console.log(TiempoC)
    }
    
    const TomarSeg =(e)=>{
        setSegundos(e.target.value)
    }
    return(
        <>
        <h1>
         Conversor
        </h1>
        <input
        type="number"
        placeholder = "ingresar segundos"
        value={segundo}
        onChange={(even)=> TomarSeg(even)}>
        </input>
        <button onClick={()=> Convertir()}> Convertir</button>
        </>
    )
}
