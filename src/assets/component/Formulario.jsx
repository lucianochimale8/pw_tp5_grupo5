import React, { useState } from 'react';

export default function Formulario() {
  // Para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    dni: '',
    telefono: ''
  });

    const [errors, setErrors] = useState({});
    // Estado para ver el mjs si lo logaste/exito
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Maneja el cambio de los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

    // Para Validar el form

    const ValidaForm = () => {
        const nuevoError = {};

        //Nombre
        if(!formData.nombre.trim()){
            nuevoError.nombre = 'El nombre es obligatorio';
        }else if(formData.nombre.length < 2){
            nuevoError.nombre = 'el nombre debe tener por lo menos dos caracteres'
        }
    }



   return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-4">Formulario de Registro</h2>
              
              {isSubmitted && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                  <strong>¡Éxito!</strong> Tus datos han sido guardados correctamente.
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setIsSubmitted(false)}
                  ></button>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="row">
                  {/* Nombre */}
                  <div className="col-md-6 mb-3">
                    <label htmlFor="nombre" className="form-label">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ingresa tu nombre"
                    />
                    {errors.nombre && (
                      <div className="invalid-feedback">{errors.nombre}</div>
                    )}
                  </div>

                  {/* Apellido */}
                  <div className="col-md-6 mb-3">
                    <label htmlFor="apellido" className="form-label">
                      Apellido *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.apellido ? 'is-invalid' : ''}`}
                      id="apellido"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleChange}
                      placeholder="Ingresa tu apellido"
                    />
                    {errors.apellido && (
                      <div className="invalid-feedback">{errors.apellido}</div>
                    )}
                  </div>
                </div>

                {/* Correo */}
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    className={`form-control ${errors.correo ? 'is-invalid' : ''}`}
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="ejemplo@correo.com"
                  />
                  {errors.correo && (
                    <div className="invalid-feedback">{errors.correo}</div>
                  )}
                </div>

                <div className="row">
                  {/* DNI */}
                  <div className="col-md-6 mb-3">
                    <label htmlFor="dni" className="form-label">
                      DNI *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.dni ? 'is-invalid' : ''}`}
                      id="dni"
                      name="dni"
                      value={formData.dni}
                      onChange={handleChange}
                      placeholder="12345678"
                      maxLength="8"
                    />
                    {errors.dni && (
                      <div className="invalid-feedback">{errors.dni}</div>
                    )}
                  </div>

                  {/* Teléfono */}
                  <div className="col-md-6 mb-4">
                    <label htmlFor="telefono" className="form-label">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="1122334455"
                    />
                    {errors.telefono && (
                      <div className="invalid-feedback">{errors.telefono}</div>
                    )}
                  </div>
                </div>

                {/* Botones */}
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button
                    type="button"
                    className="btn btn-outline-secondary me-md-2"
                    onClick={handleReset}
                  >
                    Limpiar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Enviar Datos
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sección para mostrar datos guardados (solo es para que vea que si se almacenan) */}
          <div className="mt-4">
            <button 
              className="btn btn-outline-info btn-sm"
              onClick={() => {
                const datosGuardados = localStorage.getItem('datosUsuario');
                if (datosGuardados) {
                  alert('Datos guardados:\n' + JSON.stringify(JSON.parse(datosGuardados), null, 2));
                } else {
                  alert('No hay datos guardados');
                }
              }}
            >
              Ver datos guardados
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card {
          border: none;
          border-radius: 15px;
        }
        
        .form-label {
          font-weight: 500;
          color: #333;
        }
        
        .btn-primary {
          background-color: #f1af4cff;
          border-color: #f1724cff;
        }
        
        .btn-primary:hover {
          background-color: #d9673aff;
          border-color: #d93a3aff;
        }
      `}</style>
    </div>
  );

}