import { useCallback } from "react";

export const useScrollToId = () => {
  const scrollToId = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // Hace el scroll animado
        block: "start",     // Alinea al inicio del contenedor
      });
    } else {
      console.warn(`Elemento con id "${id}" no encontrado.`);
    }
  }, []);

  return scrollToId;
};
