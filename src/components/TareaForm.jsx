import { useEffect, useState } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";
import { crearTarea, leerTareasAPI } from "../helpers/queries.js";
import ListaTarea from "./ListaTarea.jsx";

const TareaForm = () => {
  const [listaTarea, setListaTareas] = useState([]);
  const [tarea, setTarea] = useState("");

  const consultarTarea = async () => {
    try {
      const resultado = await leerTareasAPI();
      setListaTareas(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    consultarTarea();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nuevaTarea = { nombreTarea: tarea };
      await crearTarea(nuevaTarea);
      const tareas = await leerTareasAPI();

      setListaTareas(tareas);
      setTarea("");
    } catch (error) {
      console.error("Error al agregar la Tarea", error);
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            <PlusCircle />
          </Button>
        </Form.Group>
      </Form>

      <hr />

      <ListGroup>
        {listaTarea && listaTarea.length > 0 ? (
          listaTarea.map((tareas) => (
            <ListaTarea
              key={tareas._id}
              tarea={tareas}
              setListaTareas={setListaTareas}
            />
          ))
        ) : (
          <p className="text-center fw-bold">No hay Tareas Guardadas</p>
        )}
      </ListGroup>
    </>
  );
};

export default TareaForm;
