import { NextResponse } from "next/server";

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
  "bellavista",
];

export async function GET() {
  try {
    const res = await fetch("https://ipapi.co/json/", {
      cache: "no-store",
    });

    const data = await res.json();

    const city = (data.city || "").toLowerCase();
    const regionName = (data.region || "").toLowerCase();

    const isLima =
      regionName.includes("lima") ||
      city.includes("callao") ||
      limaDistricts.some((district) => city.includes(district));

    return NextResponse.json({
      region: isLima ? "Lima" : "Provincia",
      city: data.city,
      rawRegion: data.region,
    });
  } catch {
    return NextResponse.json({
      region: "Provincia",
    });
  }
}