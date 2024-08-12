"use client"
import { useEffect, useRef } from 'react';

const imagens = [
  '/clinica/clinica1.jpg',
  '/clinica/clinica2.jpg'
  
  // Adicione mais imagens conforme necessário
];

const Galeria = ({ imagens }) => {
  const galeriaRef = useRef();

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (galeriaRef.current) {
        galeriaRef.current.scrollLeft += 2;
      }
    }, 1000); // Aproximadamente 60 frames por segundo

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="galeriaContainer">
      <div className="galeria" ref={galeriaRef}>
        {imagens.map((src, index) => (
          <img key={index} src={src} className="imagem" alt={`Imagem ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Galeria;

