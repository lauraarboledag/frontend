import React, { useEffect, useState } from "react"
import Footer from "./ui/Footer"
import { createTipoEquipo, getTipoEquipos } from "../services/TipoEquipoService"

export default function Marcas() {

    const [TipoEquipos, setTipoEquipos] = useState([])
    const [newEquipo, setNewEquipo] = useState({ name: "" })
    const [query, setQuery] = useState(true)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const routes = "marca"
    const condicion = true
    

    const listTipoEquipos = async () => {
        try {
            setError(false)
            setLoading(true)
            const { data } = await getTipoEquipos(condicion, routes, query)
            console.log(data)
            setTipoEquipos(data)

        } catch (e) {
            console.log(e)
            setError(true)
            setLoading(false)
        }

    }
    useEffect(() => {
        listTipoEquipos()
    }, [query])

    const changeSwitch = () => {
        setQuery(!query)
    }

    const handleChange = (e) => {
        setTipoEquipos({
            ...TipoEquipos,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('name: ', newEquipo.name);
        console.log(newEquipo)

        await createTipoEquipo(routes, newEquipo)
        listTipoEquipos()
        setNewEquipo({ name: "" })
    }

    const handleSetEquiponew = (event) => {
        setNewEquipo({ name: event.target.value })
    }

    const refrescarNew = () => {
        window.location.reload();
        setNewEquipo({ name: "" })
    }

    return (
        <>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Crear Nuevo { }</h1>
                            <button type="button" onClick={refrescarNew} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
                                    <input
                                        type="text"
                                        placeholder="Escribe un equipo"
                                        className="form-control"
                                        id="recipient-name"
                                        value={newEquipo.name}
                                        onChange={handleSetEquiponew}
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" onClick={refrescarNew} className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button type="submit" disabled={!newEquipo.name} className="btn btn-primary" data-bs-dismiss="modal">Enviar</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <button type="button" className="btn btn-outline-warning"
                data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"
            >
                Agregar Equipo
            </button>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                    checked={query}
                    onChange={changeSwitch} />
                <label className="form-check-label" for="flexSwitchCheckDefault">activo</label>
            </div>

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
