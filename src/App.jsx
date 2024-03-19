import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { Container } from "react-bootstrap";
import TareaForm from "./components/TareaForm";

function App() {
  return (
    <>
    <Container className="my-5 mainPage">
      <section className="text-light">
        <h1 className="display-4 text-center">Lista de tareas</h1>
        <hr />
        
        <TareaForm />
      </section>
    </Container>

    <footer className="bg-secondary text-light text-center py-4 fw-bold ">
      Juan Diego Quintana &copy; Todos los derechos reservados
    </footer>
  </>
  )
}

export default App
