
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header'; 
import Footer from './components/Footer'; 


import HomePage from './pages/HomePage';
import CurriculumPage from './pages/CurriculumPage';
import ContactPage from './pages/ContactPage';


import './App.css';

function App() {
  return (
    <Router> 
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> 
        <Header />

      
        <main className="mt-4" style={{ flexGrow: 1 }}>
          <Routes> 
            <Route path="/" element={<HomePage />} />
            <Route path="/curriculum" element={<CurriculumPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            
          </Routes>
        </main>

        <Footer /> 
      </div>
    </Router>
  );
}

export default App;