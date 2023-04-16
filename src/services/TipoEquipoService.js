import {axiosConfig} from "../configuration/axiosConfig"

const getTipoEquipos = (estado, routes) => {
    return axiosConfig.get(`${routes}?estado=`+ estado, {
        headers: {
          "Content-Type": "application/json"
        }
      })
}
const createTipoEquipo = (data = {}) => {
  return axiosConfig.post('tiposequipos', data, {
      headers: {
          'Content-Type': 'application/json'
      }
  })
}
const editarTipoEquipo = (tipoId, data) => {
  return axiosConfig.put(`tiposequipos/${tipoId}`, data, {
   headers: {
      'Content-type': 'application/json'
   }
  });
}

// opcional
const eliminarTipoEquipo = (tipoId) => {
  return axiosConfig.delete(`tipoequipos/${tipoId}`, {}, {
   headers: {
      'Content-type': 'application/json'
   }
  });
}


export {
    getTipoEquipos,
    createTipoEquipo,
    editarTipoEquipo,
    eliminarTipoEquipo
}