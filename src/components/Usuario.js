import React, { useEffect, useState } from "react"
import Footer from "./ui/Footer"
import { getTipoEquipos } from "../services/TipoEquipoService"

export default function Usuario() {

    const [TipoEquipos, setTipoEquipos] = useState([])
    const routes = "usuario"
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
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Agregar Usuario</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="recipient-name" className="col-form-label">Nombre</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-3">
                                    <label for="recipient-name" className="col-form-label">Email</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-3">
                                    <label for="message-text" className="col-form-label">Estado</label>
                                    <textarea className="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary">Añadir Usuario</button>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-outline-warning"
                data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"
            >
                Agregar Usuario
            </button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Fecha de creación</th>
                        <th scope="col">Fecha de actualización</th>
                        <th scope="col">Email</th>
                        <th scope="col">Editar información</th>
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
                                <td>{tipoEquipo.email}</td>
                                <td><button type="button" className="btn btn-info">Editar</button></td>
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
