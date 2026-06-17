"use client";

import { useEffect, useState } from "react";
import { getCachedCity, setRegionCache } from "@/app/hooks/useRegion";

export function useCity() {
  const [city, setCity] = useState(null);

  useEffect(() => {
    const cached = getCachedCity();
    if (cached) {
      setCity(cached);
      return;
    }

    fetch("/api/region")
      .then((res) => res.json())
      .then((data) => {
        const detectedCity   = data.city   ?? null;
        const detectedRegion = data.region ?? "Provincia";
        setRegionCache(detectedRegion, false, detectedCity);
        setCity(detectedCity);
      })
      .catch(() => setCity(null));
  }, []);

  return city;
}
