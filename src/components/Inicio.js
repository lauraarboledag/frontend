import React, { useEffect, useState } from "react"
import TipoEquipos from "./TipoEquipos";
import { createTipoEquipo, editarTipoEquipo, getTipoEquipos } from "../services/TipoEquipoService"

function Inicio() {
    const [TipoEquipos, setTipoEquipo] = useState([])
    getTipoEquipos();
    
    return ( <>
   <div className="container-fluid mt-3 mb-3">
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    TipoEquipos.map(TipoEquipos => {
                        return (
                            <div className="col" key={TipoEquipos._id}>
                                <div className="card">
                                    <img src={TipoEquipos.foto} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{TipoEquipos.nombre}</h5>
                                        <p className="card-text">{TipoEquipos.descripcion}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>  
    </> );
}
export default Inicio;

