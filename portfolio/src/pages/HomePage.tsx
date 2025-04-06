import React from 'react';
import { Link } from 'react-router-dom'

function HomePage() {
  const handleScrollToAbout = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const aboutSection = document.getElementById('sobre-mi');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>

      <div className="hero-section d-flex align-items-center text-center text-white"
        style={{

          backgroundImage: `url('/imagenes/grunge-black-concrete-textured-background.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          minHeight: 'calc(100vh - 56px)',
        }}>
        <div className="container">

          <img src="/imagenes/WhatsApp Image 2025-03-05 at 06.34.53.jpeg" className="rounded-circle mb-3" alt="Jorge Asca" width="150" />
          <h1 className="display-3 fw-bold">Jorge Asca</h1>
          <p className="lead">Desarrollador Web | Full Stack</p>

          <a href="#sobre-mi" className="btn btn-primary btn-lg mt-3" onClick={handleScrollToAbout}>
            <i className="bi bi-arrow-down-circle"></i> Más sobre mí
          </a>
        </div>
      </div>

      <section id="sobre-mi" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Sobre Mí</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow-lg text-center p-4">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Jorge Asca</h5>
                  <p className="card-text">Soy un apasionado desarrollador web con experiencia en tecnologías modernas como <strong>Java, Spring Boot, Thymeleaf, React y Bootstrap</strong>. Me encanta crear soluciones eficientes y elegantes para mejorar la experiencia del usuario.</p>
                  <Link to="/curriculum" className="btn btn-outline-primary">
                    <i className="bi bi-file-earmark-text"></i> Ver Currículum
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="tecnologias" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Tecnologías que manejo</h2>
          <div className="row gy-4">

            <div className="col-lg-4 col-md-6">
              <div className="card shadow-sm h-100">

                <img src="/imagenes/Unofficial_JavaScript_logo_2.svg.png" className="card-img-top p-3" alt="JavaScript Logo" style={{ maxHeight: '180px', objectFit: 'contain' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">JavaScript</h5>
                  <p className="card-text flex-grow-1">Lenguaje de programación ligero y versátil utilizado principalmente para el desarrollo web.</p> {/* flex-grow-1 para empujar botón abajo */}

                  <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-box-arrow-up-right"></i> Ver más
                  </a>
                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-6">
              <div className="card shadow-sm h-100">

                <img src="/imagenes/0_mfBod1726kpQMz0G.png" className="card-img-top p-3" alt="Spring Boot Logo" style={{ maxHeight: '180px', objectFit: 'contain' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Spring Boot</h5>
                  <p className="card-text flex-grow-1">Framework basado en Spring que facilita la creación de aplicaciones Java robustas y escalables.</p>
                  <a href="https://spring.io/projects/spring-boot" className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-box-arrow-up-right"></i> Ver más
                  </a>
                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-6">
              <div className="card shadow-sm h-100">

                <img src="/imagenes/cae29b_583a314283924629ab7ede58d33ba4e2~mv2.jpg" className="card-img-top p-3" alt="HTML & CSS Logos" style={{ maxHeight: '180px', objectFit: 'contain' }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">HTML y CSS</h5>
                  <p className="card-text flex-grow-1">Lenguajes fundamentales para estructurar y diseñar el contenido de las páginas web.</p>
                  <a href="https://developer.mozilla.org/es/docs/Web/HTML" className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-box-arrow-up-right"></i> Ver más
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section id="contacto-link" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Contacto</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow-lg text-center p-4">
                <div className="card-body">
                  <h5 className="card-title fw-bold">Hablemos</h5>
                  <p className="card-text">Si quieres trabajar conmigo o tienes alguna consulta, no dudes en contactarme.</p>

                  <Link to="/contacto" className="btn btn-outline-primary">
                    <i className="bi bi-envelope-fill"></i> Ir a Contacto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;