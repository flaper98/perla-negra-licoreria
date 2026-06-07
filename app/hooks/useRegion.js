"use client";

import { useEffect, useState } from "react";

export function useRegion() {
  const [region, setRegion] = useState(null);

  useEffect(() => {
    fetch("/api/region")
      .then((res) => res.json())
      .then((data) => {
        console.log("REGION API:", data);
        setRegion(data.region || "Provincia");
      })
      .catch(() => {
        setRegion("Provincia");
      });
  }, []);

  return region;
}