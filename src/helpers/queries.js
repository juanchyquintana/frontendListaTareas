const tareaAPI = import.meta.env.VITE_API_TAREAS;

const leerTareasAPI = async () => {
  try {
    const respuesta = await fetch(tareaAPI);
    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    console.log(error);
  }
};

const crearTarea = async (datos) => {
  try {
    const respuesta = await fetch(tareaAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

const eliminarTarea = async (id) => {
  try {
    const respuesta = await fetch(`${tareaAPI}/${id}`, {
      method: "DELETE",
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export { leerTareasAPI, crearTarea, eliminarTarea };
