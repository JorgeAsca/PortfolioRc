
import React, { useState, useRef, FormEvent } from 'react'; 
import emailjs from '@emailjs/browser'; // importanos la librería de EmailJS

const ContactPage: React.FC = () => {
 
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const form = useRef<HTMLFormElement | null>(null); 

  // Use los valores de las variables de entorno para EmailJS
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(''); // Limpiar errores previos

    // Validar que la referencia al formulario exista
    if (!form.current) {
      console.error("Error: Referencia al formulario no encontrada.");
      setErrorMessage("Error interno al enviar el formulario.");
      return;
    }

    setIsSubmitting(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log('SUCCESS!', result.status, result.text);
        setShowSuccessMessage(true);
        if (form.current) {
          form.current.reset();
        }
        // Ocultar mensaje de éxito después de 5 segundos
        setTimeout(() => setShowSuccessMessage(false), 5000);
      }, (error) => {
        console.error('FAILED...', error);
        setErrorMessage('Error al enviar el mensaje. Inténtalo de nuevo.');
      })
      .finally(() => {
        setIsSubmitting(false); // Terminar estado de envío
      });
  };

  return (
    <section className="py-5">
      <div className="container-fluid px-3 px-md-4"> 
        <h2 className="text-center fw-bold mb-4">Contáctame</h2>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6"> 
            <div className="card shadow-lg p-4">
              <div>
              
                <form ref={form} id="contactForm" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="from_name"
                      placeholder="Tu nombre"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="reply_to" 
                      placeholder="correo@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                    <textarea
                      className="form-control"
                      id="mensaje"
                      name="message" 
                      rows={4}
                      placeholder="Escribe tu mensaje aquí"
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  <div className="d-grid">
                
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send-fill me-2"></i> Enviar Mensaje
                        </>
                      )}
                    </button>
                  </div>
                </form>
                
                {showSuccessMessage && (
                  <div className="alert alert-success mt-3" role="alert">
                    ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
                  </div>
                )}
               
                {errorMessage && (
                  <div className="alert alert-danger mt-3" role="alert">
                    {errorMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>


        <div className="row justify-content-center mt-4">
        
        </div>
      </div>
    </section>
  );
};

export default ContactPage;