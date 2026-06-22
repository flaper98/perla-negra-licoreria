"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "age_verified";

export default function AgeNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  const confirm = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  const deny = () => {
    window.location.href = "https://www.who.int/es/news-room/fact-sheets/detail/alcohol";
  };

  if (!visible) return null;

  return (
    <div id="ageGate">
      <div className="card">
        <img src="/img/logo.webp" alt="Perla Negra" />
        <h2 className="silver-text">¿Eres mayor de edad?</h2>
        <p>Para ingresar a Perla Negra Distribuidora debes tener 18 años o más. La venta de bebidas alcohólicas está prohibida para menores de edad.</p>
        <div className="gate-actions">
          <button className="btn btn-blue" onClick={confirm} style={{ justifyContent: "center" }}>
            Sí, soy mayor de 18
          </button>
          <button className="no" onClick={deny}>No soy mayor de edad</button>
        </div>
      </div>
    </div>
  );
}
