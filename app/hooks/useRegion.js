"use client";

import { useEffect, useState } from "react";

const limaDistricts = [
  "lima",
  "miraflores",
  "san isidro",
  "santiago de surco",
  "surco",
  "la molina",
  "la victoria",
  "callao",
  "san miguel",
  "jesus maria",
  "san borja",
  "barranco",
  "magdalena",
  "pueblo libre",
  "lince",
  "breña",
  "rimac",
  "rímac",
  "los olivos",
  "comas",
  "independencia",
  "carabayllo",
  "puente piedra",
  "ate",
  "santa anita",
  "san juan de lurigancho",
  "sjl",
  "villa el salvador",
  "villa maria del triunfo",
  "villa maría del triunfo",
  "san juan de miraflores",
  "chorrillos",
  "lurin",
  "lurín",
  "ventanilla",
  "bellavista"
];

export function useRegion() {
  const [region, setRegion] = useState(null);

  useEffect(() => {
    const savedRegion = localStorage.getItem("region");

    if (savedRegion) {
      setRegion(savedRegion);
      return;
    }

    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const city = (data.city || "").toLowerCase();
        const regionName = (data.region || "").toLowerCase();
        const isLima =
          limaDistricts.some((d) => city.includes(d)) ||
          regionName.includes("lima") ||
          city.includes("callao");

        const finalRegion = isLima
          ? "Lima"
          : "Provincia";

        localStorage.setItem(
          "region",
          finalRegion
        );

        setRegion(finalRegion);
      })
      .catch(() => {
        setRegion("Provincia");
      });
  }, []);

  return region;
}