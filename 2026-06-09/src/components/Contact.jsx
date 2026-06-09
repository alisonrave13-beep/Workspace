// ============================================================
//  🛠️ COMPONENTE PARA COMPLETAR — TAREA ESTUDIANTE
//  Contact.jsx
//
//  INSTRUCCIONES:
//  1. Completa el formulario: nombre, email, teléfono,
//     tipo de servicio (select), mensaje (textarea), botón.
//  2. Agrega la información de contacto en la columna izquierda.
//  3. Usa las clases Bootstrap: form-label, form-control,
//     form-select, btn.
//
//  ⚠️ DIFERENCIAS JSX vs HTML:
//     class="..."  →  className="..."
//     for="campo"  →  htmlFor="campo"
//
//  RETO ADICIONAL: usa useState para manejar el formulario
//  y mostrar una alerta al enviarlo.
// ============================================================

import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEnviado(true);
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      servicio: '',
      mensaje: '',
    });
  };

  return (
    <section id="contacto" className="py-5 bg-dark text-white">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-titulo text-white">Contáctenos</h2>
          <p className="text-light opacity-75">
            Estamos listos para responder sus preguntas y ayudarle a encontrar la solución ideal.
          </p>
        </div>

        <div className="row g-5">

          {/* Columna izquierda: información de contacto */}
          <div className="col-lg-4">
            <h4 className="mb-4">Información de contacto</h4>
            <ul className="list-unstyled text-light opacity-85">
              <li className="mb-3">
                <strong>📍 Dirección:</strong> Calle Principal 123, Ciudad
              </li>
              <li className="mb-3">
                <strong>📞 Teléfono:</strong> +34 600 123 456
              </li>
              <li className="mb-3">
                <strong>📧 Email:</strong> contacto@empresa.com
              </li>
              <li className="mb-3">
                <strong>🕐 Horario:</strong> Lun a Vie, 09:00 - 18:00
              </li>
            </ul>
          </div>

          {/* Columna derecha: formulario */}
          <div className="col-lg-8">
            <div className="bg-white text-dark rounded-3 p-4">
              {enviado && (
                <div className="alert alert-success" role="alert">
                  Gracias por contactarnos. Su mensaje se ha enviado correctamente.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="row g-3">

                  {/* Campo: Nombre */}
                  <div className="col-md-6">
                    <label htmlFor="nombre" className="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Su nombre"
                      required
                    />
                  </div>

                  {/* Campo: Email */}
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="correo@ejemplo.com"
                      required
                    />
                  </div>

                  {/* Campo: Teléfono */}
                  <div className="col-md-6">
                    <label htmlFor="telefono" className="form-label">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="+34 600 123 456"
                    />
                  </div>

                  {/* Campo: Tipo de servicio — usa <select> con 5+ opciones */}
                  <div className="col-md-6">
                    <label htmlFor="servicio" className="form-label">
                      Tipo de servicio
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">Seleccione un servicio</option>
                      <option value="diseño-web">Diseño web</option>
                      <option value="marketing-digital">Marketing digital</option>
                      <option value="consultoria">Consultoría</option>
                      <option value="soporte-tecnico">Soporte técnico</option>
                      <option value="desarrollo-app">Desarrollo de aplicaciones</option>
                    </select>
                  </div>

                  {/* Campo: Mensaje — usa <textarea> */}
                  <div className="col-12">
                    <label htmlFor="mensaje" className="form-label">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="form-control"
                      rows="5"
                      placeholder="Escribe tu mensaje aquí"
                      required
                    />
                  </div>

                  {/* Botón enviar */}
                  <div className="col-12 text-end">
                    <button type="submit" className="btn btn-primary px-4">
                      Enviar mensaje
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;