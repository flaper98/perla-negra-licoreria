"use client";

import { useEffect, useState } from "react";

export function useRegion() {
  const [region, setRegion] = useState(null);

  useEffect(() => {
    const savedRegion = localStorage.getItem("region");

    if (savedRegion) {
      setRegion(savedRegion);
      return;
    }

    fetch("/api/region")
      .then((res) => res.json())
      .then((data) => setRegion(data.region || "Provincia"))
      .catch(() => setRegion("Provincia"));
  }, []);

  return region;
}