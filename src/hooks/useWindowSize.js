// src/hooks/useWindowSize.js

import { useState, useEffect } from "react";

const useWindowSize = () => {
  // Estado para almacenar el tamaño de la ventana
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Función para actualizar el tamaño de la ventana
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Añadir el event listener
    window.addEventListener("resize", handleResize);

    // Llamar a la función inmediatamente para obtener el tamaño inicial
    handleResize();

    // Limpiar el event listener cuando el componente se desmonte
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Ejecutar este efecto solo una vez (cuando el componente se monta)

  return windowSize;
};

export default useWindowSize;
