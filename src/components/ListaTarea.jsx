import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import { XCircle } from 'react-bootstrap-icons'
import Swal from "sweetalert2"
import { eliminarTarea, leerTareasAPI } from '../helpers/queries.js'

const ListaTarea = ({tarea, setListaTareas}) => {

  const borrarTarea = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar el producto?",
      text: "No podrás revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await eliminarTarea(tarea._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Eliminado",
            text: `Has eliminado el producto: ${tarea.nombreTarea}`,
            icon: "success",
          });
        }

        const listaTarea = await leerTareasAPI();
        setListaTareas(listaTarea);
      } else {
        Swal.fire({
          title: "Ocurrió un Error",
          text: `La Tarea "${tarea.nombreTarea}" no fue eliminada. Intenta nuevamente.`,
          icon: "error",
        });
      }
    });
  }

  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {tarea.nombreTarea}
      <i className="bi bi-x-circle-fill"></i>
      <Button variant="outline-danger" onClick={borrarTarea} >
        <XCircle />
      </Button>
    </ListGroup.Item>
  )
}

export default ListaTarea
