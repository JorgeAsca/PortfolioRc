
import React from 'react';

function CurriculumPage() {
  return (

    <section className="py-5">

      <div className="container-fluid px-3 px-md-4">
        <h2 className="text-center fw-bold mb-5">Currículum</h2>
        <div className="row gy-4">


          <div className="col-md-4">
            <div className="card shadow-lg p-4 h-100">
              <h3 className="fw-bold mb-3">Experiencia</h3>

              <div className="bg-light p-3 rounded shadow-sm mb-3">
                <h5 className="fw-bold fs-6">Asistente de Gestión - Empresa VALEGHER</h5>
                <p className="text-muted small mb-1">(01/2024 - 08/2024)</p>
                <p className="mb-0">Encargado de la página principal de la empresa, manejo de personal y emisión de facturas.</p>
              </div>

              <div className="bg-light p-3 rounded shadow-sm">
                <h5 className="fw-bold fs-6">Cocinero/Parrillero - LOS AMIGOS DE MACA</h5>
                <p className="text-muted small mb-1">(2021 - 2023)</p>
                <p className="mb-0">Encargado del local principal de la sede.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-lg p-4 h-100">
              <h3 className="fw-bold mb-3">Estudios</h3>

              <div className="bg-light p-3 rounded shadow-sm mb-3">
                <h5 className="fw-bold fs-6">Formación Profesional Desarrollo Web</h5>
                <p className="text-muted small mb-1">I.E.S Cura Valera (2024 - Presente)</p>

              </div>

              <div className="bg-light p-3 rounded shadow-sm">
                <h5 className="fw-bold fs-6">Derecho</h5>
                <p className="text-muted small mb-1">Universidad Tecnológica del Perú (2020 - 2021)</p>

              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div className="card shadow-lg p-4 h-100">
              <h3 className="fw-bold mb-4">Habilidades</h3>

              <div className='mb-3'>
                <p className="fw-bold mb-1">Asertivo</p>
                <div className="progress" role="progressbar" aria-label="Habilidad Asertivo" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>

                  <div className="progress-bar bg-primary" style={{ width: '75%' }}></div>
                </div>
              </div>

              <div className='mb-3'>
                <p className="fw-bold mb-1">Proactivo</p>
                <div className="progress" role="progressbar" aria-label="Habilidad Proactivo" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-bar bg-primary" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className='mb-3'>
                <p className="fw-bold mb-1">Compromiso</p>
                <div className="progress" role="progressbar" aria-label="Habilidad Compromiso" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                  <div className="progress-bar bg-primary" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CurriculumPage;