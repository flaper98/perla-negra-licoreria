"use client";

import { useEffect, useState } from "react";

const CACHE_KEY  = "region_v2";
const AUTO_TTL   = 24 * 60 * 60 * 1000;       // 24 horas
const MANUAL_TTL = 30 * 24 * 60 * 60 * 1000;  // 30 días (selección manual)

function getCachedEntry() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const entry = JSON.parse(raw);
    const ttl = entry.manual ? MANUAL_TTL : AUTO_TTL;
    if (Date.now() - entry.ts > ttl) return null;
    return entry;
  } catch {
    return null;
  }
}

export function setRegionCache(value, manual = false, city = null) {
  localStorage.setItem(
    CACHE_KEY,
    JSON.stringify({ value, ts: Date.now(), manual, city })
  );
}

export function getCachedCity() {
  return getCachedEntry()?.city ?? null;
}

export function useRegion() {
  const [region, setRegion] = useState(null); // null en SSR y primer render → consistente

  useEffect(() => {
    const entry = getCachedEntry();
    if (entry) {
      setRegion(entry.value); // Cache válido → aplica de inmediato
      return;
    }

    // Sin caché: muestra Lima antes de esperar la API para evitar pantalla en blanco
    setRegion("Lima");

    fetch("/api/region")
      .then((res) => res.json())
      .then((data) => {
        const detected = data.region || "Provincia";
        setRegionCache(detected, false, data.city ?? null);
        setRegion(detected);
      })
      .catch(() => {
        setRegionCache("Provincia", false, null);
        setRegion("Provincia");
      });
  }, []);

  return region;
}
