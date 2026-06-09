// ============================================================
//  🛠️ COMPONENTE PARA COMPLETAR — TAREA ESTUDIANTE
//  Services.jsx
//
//  INSTRUCCIONES:
//  1. Define el array "servicios" con al menos 6 servicios.
//     Cada objeto debe tener: icono, titulo, descripcion.
//  2. Completa el JSX usando tarjetas Bootstrap (card).
//  3. Usa .map() para renderizar — NO copies el HTML 6 veces.
//
//  PISTAS:
//  - Usa <div className="row g-4"> para el grid
//  - Cada tarjeta va en <div className="col-md-6 col-lg-4">
//  - Clases Bootstrap útiles: card, card-body, card-title, card-text
// ============================================================

// 🛠️ PASO 1: Define aquí tu array de servicios
const servicios = [
  {
    icono: '⚡',
    titulo: 'Instalación eléctrica',
    descripcion: 'Servicios eléctricos residenciales y comerciales con seguridad y eficiencia.',
  },
  {
    icono: '🛠️',
    titulo: 'Mantenimiento técnico',
    descripcion: 'Revisiones periódicas y soporte rápido para mantener todo en funcionamiento.',
  },
  {
    icono: '💻',
    titulo: 'Desarrollo web',
    descripcion: 'Páginas web modernas y funcionales que refuerzan su presencia en línea.',
  },
  {
    icono: '📈',
    titulo: 'Marketing digital',
    descripcion: 'Estrategias digitales para atraer clientes y aumentar la visibilidad de su marca.',
  },
  {
    icono: '🔒',
    titulo: 'Seguridad informática',
    descripcion: 'Protección de datos y sistemas con soluciones confiables y actualizadas.',
  },
  {
    icono: '🌐',
    titulo: 'Soporte remoto',
    descripcion: 'Asistencia a distancia para resolver incidentes de forma rápida y eficiente.',
  },
];

function Services() {
  return (
    <section id="servicios" className="py-5 bg-dark text-white">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-titulo text-white">Nuestros Servicios</h2>
          <p className="section-subtitulo text-light">
            Conoce las soluciones que ofrecemos para impulsar tu negocio y resolver problemas con tecnología.
          </p>
        </div>

        {/* 🛠️ PASO 2: Renderiza las tarjetas con servicios.map(...) */}
        <div className="row g-4">
          {servicios.map((servicio, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="mb-3 fs-2">{servicio.icono}</div>
                  <h5 className="card-title">{servicio.titulo}</h5>
                  <p className="card-text text-muted">{servicio.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;