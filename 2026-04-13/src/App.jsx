import { useState, useEffect } from 'react';
import './App.css';

// CORRECCIÓN BUG 1: Se agregó la propiedad 'categoria' a la tarea 4
const tareasIniciales = [
  { id: 1, texto: 'Aprender React', categoria: 'estudio', completada: false },
  { id: 2, texto: 'Hacer ejercicio', categoria: 'salud', completada: true },
  { id: 3, texto: 'Leer un libro', categoria: 'ocio', completada: false },
  { id: 4, texto: 'Practicar debugging', categoria: 'general', completada: false },
];

function App() {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [filtro, setFiltro] = useState('todas');
  const [contador, setContador] = useState(0);

  // CORRECCIÓN BUG 2: Se agregó el arreglo de dependencias [] para evitar el bucle infinito
  useEffect(() => {
    console.log('Renderizando App, contador:', contador);
  }, []); 

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === 'todas') return true;
    
    // CORRECCIÓN BUG 3: Se compara contra booleanos (true/false) en lugar de strings ("true"/"false")
    if (filtro === 'completadas') return tarea.completada === true;
    if (filtro === 'pendientes') return tarea.completada === false;
    
    return true;
  });

  // Agrega una tarea nueva a la lista
  function agregarTarea(texto) {
    if (!texto.trim()) return;
    
    // CORRECCIÓN BUG 4: Se usa el operador spread [...] para crear un nuevo arreglo en lugar de .push()
    const nuevaTarea = { id: Date.now(), texto, categoria: 'general', completada: false };
    setTareas([...tareas, nuevaTarea]);
  }

  // Marca una tarea como completada
  function completarTarea(id) {
    const nuevasTareas = tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, completada: true } : tarea
    );
    setTareas(nuevasTareas);
  }

  return (
    <div className="app">
      <h1>Mis Tareas</h1>

      <div className="filtros">
        <button onClick={() => setFiltro('todas')}>Todas</button>
        <button onClick={() => setFiltro('pendientes')}>Pendientes</button>
        <button onClick={() => setFiltro('completadas')}>Completadas</button>
      </div>

      <ul className="lista-tareas">
        {tareasFiltradas.map((tarea) => (
          <li key={tarea.id} className={tarea.completada ? 'completada' : ''}>
            <span>{tarea.texto}</span>
            {/* Se usa ?. por seguridad adicional para evitar errores si la categoría no existe */}
            <span className="categoria">{tarea.categoria?.toUpperCase()}</span>
            <button onClick={() => completarTarea(tarea.id)}>✔</button>
          </li>
        ))}
      </ul>

      <AgregarTarea onAgregar={agregarTarea} />
      <PerfilUsuario />
    </div>
  );
}

function AgregarTarea({ onAgregar }) {
  const [texto, setTexto] = useState('');

  function manejarEnvio(e) {
    e.preventDefault();
    onAgregar(texto);
    setTexto('');
  }

  return (
    <form onSubmit={manejarEnvio} className="form-agregar">
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

function PerfilUsuario() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    obtenerUsuario();
  }, []);

  // Simula una llamada a una API que a veces falla (como pasa en la vida real)
  function obtenerUsuario() {
    const exito = Math.random() > 0.5;

    setTimeout(() => {
      // CORRECCIÓN BUG 5: Se envuelve en try/catch para capturar el error y evitar que la UI se quede congelada
      try {
        if (exito) {
          setUsuario({ nombre: 'Estudiante React' });
        } else {
          throw new Error('No se pudo cargar el usuario');
        }
      } catch (error) {
        console.error("Error capturado:", error.message);
        setUsuario({ nombre: 'Invitado (Error de carga)' });
      }
    }, 1000);
  }

  if (!usuario) return <p className="perfil">Cargando perfil...</p>;

  return <p className="perfil">Perfil: {usuario.nombre}</p>;
}

export default App;