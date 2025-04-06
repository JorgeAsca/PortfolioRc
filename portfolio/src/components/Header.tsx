
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'; 

const Header: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const navbarHeight = 80; 

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        
        if (currentScrollY < navbarHeight) {
            setIsVisible(true);
        }
        
        else if (currentScrollY < lastScrollY) {
            setIsVisible(true); 
        } else {
            setIsVisible(false); 
        }

        
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        
        setLastScrollY(window.scrollY);

       
        window.addEventListener('scroll', handleScroll, { passive: true });

        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]); 

    return (
        
        <header>
            <nav
                id="navbar"
                className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-3"
                style={{
                    top: isVisible ? '0' : `-${navbarHeight}px`,
                    transition: 'top 0.4s ease-in-out' 
                }}
            >
                <div className="container">
                    
                    <Link className="navbar-brand fw-bold text-uppercase" to="/">Jorge Asca</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/" end>Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/curriculum">Currículum</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/contacto">Contacto</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;