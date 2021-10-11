import React, { useState } from "react";

import api from "../../services/api";

export default function useFilter() {
  const [tilesDynamicList, setTilesDynamicList] = useState([]);
  const [showTileList, setShowTileList] = useState(false);

  const performFilteredSearch = async (form) => {
    setShowTileList(false);

    setTilesDynamicList([1, 2, 4, 5]);

    setTimeout(() => {
      setShowTileList(true);
    }, 1000);
  };

  return {
    performFilteredSearch,
    tilesDynamicList,
    showTileList,
    setShowTileList,
  };
  // dados e funções que são utilizados em
  // outros componentes e paginas por exemplo
  // a pagina de abstenção
}