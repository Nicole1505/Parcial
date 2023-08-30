import { useState } from "react";

export const Punto3 = () => {

    const [Nombre, setNombre]= useState("") // Conversión
    const [HoraD, setHoraD]= useState("") // Segundos 
    const [Dato, setDato] = useState("")
    

    const GenerarMensaje =()=> {
        let Mensaje = ""
        let horaArray = HoraD.split(":");
        let hora = parseInt(horaArray[0]);

        if (hora >= 0 && hora < 12) {
            Mensaje = "Buenos días";
          } else if (hora >= 12 && hora < 18) {
            Mensaje = "Buenas tardes";
          } else if (hora >= 18 && hora < 24) {
            Mensaje = "Buenas noches";
          }/* else {
            Mensaje = "Hora no válida";
          }*/
      
          // Establecer el saludo en el estado
          setDato(`${Mensaje}, ${Nombre}`);
        }

        const TomarNombre =(e)=>{
            setNombre(e.target.value)
        }
        const TomarHora =(e)=>{
            setHoraD(e.target.value)
        }

            return(
                <>
                <h1>
                 Horario
                </h1>
                <input
                type="text"
                placeholder = "ingresa Nombre"
                value={Nombre}
                onChange={(even)=> TomarNombre(even)}>
                </input> 
                <input
                type ="time"
                placeholder = "ingresa Tiempo"
                value={HoraD}
                onChange={(even)=> TomarHora(even)}>
                </input>
                <button onClick={()=> GenerarMensaje()}> Convertir</button>
                <p>{Dato}</p>
                </>
            )
        }
            
 

   
