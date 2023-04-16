import React, { useEffect, useState } from "react"
import NavBar from "./ui/NavBar"
import Footer from "./ui/Footer"
import modal from "./ui/modal"
import modalEdit from "./ui/modalEdit"
import { createTipoEquipo, editarTipoEquipo, getTipoEquipos } from "../services/TipoEquipoService"

export default function TipoEquipos({ }) {

    const [TipoEquipos, setTipoEquipo] = useState([])
    const [query, setQuery] = useState(true)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [id, setId] = useState("")

    const routes = "tipoequipo"

    const listTipoEquipos = async () => {
        try {
            setError(false)
            setLoading(true)
            const { data } = await getTipoEquipos(query, routes)
            console.log(data)
            setTipoEquipo(data)

            setTimeout(() => {
                setLoading(false)
            }, 500)

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
        setTipoEquipo({
            ...TipoEquipos,
            [e.target.name]: e.target.value
        })
    }

    const saveTipoEquipo = async () => {
        try {
            setError(false)
            setLoading(true)
            const response = await createTipoEquipo(TipoEquipos)
            console.log(response)
            setTipoEquipo({ nombre: '' })
            listTipoEquipos()
            setTimeout(() => {
                setLoading(false)
            }, 500)
        } catch (e) {
            console.log(e)
            setError(true)
            setLoading(false)
        }
    }

    const closeModal = () => {
        setTipoEquipo({ nombre: '' })
        if (id) setId('')
    }

    const selectTipoEquipo = (evt) => {
        evt.preventDefault()
        setId(evt.target.id)
        const tEq = TipoEquipos.filter(tipoEquipo => tipoEquipo._id === evt.target._id)
        setTipoEquipo({ ...tEq[0] })
    }

    const editTipoEquipo = async () => {
        try {
            setError(false)
            setLoading(true)
            const response = await editarTipoEquipo(id, TipoEquipos)
            console.log(response)
            setTipoEquipo({ nombre: '' })
            listTipoEquipos()
            setTimeout(() => {
                setLoading(false)
            }, 500)
        } catch (e) {
            console.log(e)
            setError(true)
            setLoading(false)
        }
    }

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Agregar Equipo</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="recipient-name" className="col-form-label">Nombre del Equipo</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-3">
                                    <label for="recipient-name" className="col-form-label">Estado</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary">Añadir Equipo</button>
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

            {
                loading ? (
                    <div className="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) :
                    (

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Fecha de creación</th>
                                    <th scope="col">Fecha de actualización</th>
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
                                            <td>
                                                <button type="button" className="btn btn-info">Editar</button></td>
                                        </tr>
                                    )
                                })
                            }
                            <tbody>
                            </tbody>
                        </table>
                    )
            }
            <Footer />
        </>
    )
}
