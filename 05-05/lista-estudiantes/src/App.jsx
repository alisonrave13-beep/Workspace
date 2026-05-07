import Estudiante from "./components/Estudiante";

function App() {
  return (
    <>
      <h1>Lista de Estudiantes</h1>

      <Estudiante nombre="Juan" edad={20} />
      <Estudiante nombre="Maria" edad={22} />
    </>
  );
}

export default App;