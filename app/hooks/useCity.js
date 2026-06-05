"use client";

import { useEffect, useState } from "react";

export function useCity() {
  const [city, setCity] = useState(null);

  useEffect(() => {
    const savedCity = localStorage.getItem("city");

    if (savedCity) {
      setCity(savedCity);
      return;
    }

    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const detected = data.city?.toLowerCase() || "";

        if (detected.includes("lima")) {
          setCity("Lima");
          localStorage.setItem("city", "Lima");
        } else if (detected.includes("pucallpa")) {
          setCity("Pucallpa");
          localStorage.setItem("city", "Pucallpa");
        } else {
          setCity("Pucallpa");
          localStorage.setItem("city", "Pucallpa");
        }
      })
      .catch(() => {
        setCity("Pucallpa");
        localStorage.setItem("city", "Pucallpa");
      });
  }, []);

  return city;
}