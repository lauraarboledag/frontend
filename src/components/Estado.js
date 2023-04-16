import React, { useEffect, useState } from "react"
import Footer from "./ui/Footer"
import { getTipoEquipos } from "../services/TipoEquipoService"

export default function Estado() {

    const [TipoEquipos, setTipoEquipos] = useState([])
    const routes = "estadoequipo"
    const condicion = true
    const listTipoEquipos = async () => {
        try {

            const { data } = await getTipoEquipos(condicion, routes)
            console.log(data)
            setTipoEquipos(data)

        } catch (e) {
            console.log(e)
        }

    }
    useEffect(() => {
        listTipoEquipos()
    }, [])


    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Fecha de creación</th>
                        <th scope="col">Fecha de actualización</th>
                    </tr>
                </thead>
                {
                    TipoEquipos.map((tipoEquipo, index) => {
                        return (
                            <tr key={tipoEquipo._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{tipoEquipo.nombre}</td>
                                <td>{tipoEquipo.estado ? "activo" : "inactivo"}</td>
                                <td>{tipoEquipo.fechaCreacion}</td>
                                <td>{tipoEquipo.fechaActualizacion}</td>
                            </tr>
                        )
                    })
                }
                <tbody>
                </tbody>
            </table>
            <Footer />
        </>
    )
}
