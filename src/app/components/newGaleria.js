"use client"

import { useEffect, useRef } from "react";

const images = [
    '/clinica/clinica1.png',
    '/clinica/clinica2.png',
    '/clinica/clinica3.png',
    '/clinica/clinica4.png',
    '/clinica/clinica5.png'
];

export default function Galeria() {
    const galleryRef = useRef(null);

    useEffect(() => {
        const gallery = galleryRef.current;
        let scrollPosition = 0;

        const interval = setInterval(() => {
            if (gallery) {
                // Aumenta a posição de rolagem
                scrollPosition += 1;

                // Verifica se chegou ao meio da galeria para reiniciar suavemente
                if (scrollPosition >= gallery.scrollWidth / 2) {
                    scrollPosition = 0;
                }

                gallery.scrollLeft = scrollPosition;
            }
        }, 16); // Aproximadamente 60 frames por segundo

        return () => clearInterval(interval);
    }, []);

    return (
        <div 
            ref={galleryRef} 
            className= "galleryRef"
        >
            {/* Duplicando as imagens para criar o efeito de loop suave */}
            {[...images, ...images].map((src, index) => (
                <img className="img_slid" style={{}} key={index} src={src} alt={`Imagem ${index + 1}`} />
            ))}
        </div>
    );
}


