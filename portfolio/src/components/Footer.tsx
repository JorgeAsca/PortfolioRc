
import React, { useState, useEffect, useRef } from 'react';

const Footer: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const footerRef = useRef<HTMLDivElement | null>(null); // Ref para el elemento footer

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Actualizar estado si el elemento entra en la vista
                if (entry.isIntersecting) {
                    setIsVisible(true);

                }


            },
            {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.1 
            }
        );

        const currentRef = footerRef.current; 

        
        if (currentRef) {
            observer.observe(currentRef);
        }

       
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef); 
            }
            observer.disconnect(); // Desconectar el observador
        };
    }, []); 

    return (
      
        <footer
            ref={footerRef}
            className={`bg-light py-4 mt-5 border-top footer-transition ${isVisible ? 'show-footer' : ''}`}
        >
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                <p className="mb-3 mb-md-0 text-muted">&copy; {new Date().getFullYear()} Jorge Asca</p> {/* Año dinámico */}
                <div>
                    <a href="https://github.com/JorgeAsca" target="_blank" rel="noopener noreferrer" className="text-muted me-3">
                        <i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i> {/* Icono más grande */}
                    </a>
                    <a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noopener noreferrer" className="text-muted me-3">
                        <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
                    </a>
                    <a href="https://instagram.com/jorge_olazabal" target="_blank" rel="noopener noreferrer" className="text-muted">
                        <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;