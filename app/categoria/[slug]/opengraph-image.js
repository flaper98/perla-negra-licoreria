import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const categoryData = {
  whisky:      { emoji: "🥃", label: "Whisky",      tagline: "Ballantines, Jack Daniel's, Johnnie Walker y más" },
  vodka:       { emoji: "🍸", label: "Vodka",        tagline: "Absolut, Smirnoff y marcas importadas al por mayor" },
  ron:         { emoji: "🍹", label: "Ron",           tagline: "Flor de Caña, Barceló Añejo y más para tu negocio" },
  gin:         { emoji: "🫙", label: "Gin",           tagline: "Beefeater Pink, Tanqueray London Dry y más" },
  tequila:     { emoji: "🌵", label: "Tequila",      tagline: "Jose Cuervo Especial y tequilas importados" },
  vinos:       { emoji: "🍷", label: "Vinos",         tagline: "Tabernero, Santiago Queirolo y más para eventos" },
  champagne:   { emoji: "🥂", label: "Champagne",    tagline: "Riccadonna Asti, Ruby y espumantes mayoristas" },
  pisco:       { emoji: "🇵🇪", label: "Pisco",       tagline: "Lo mejor del pisco peruano al por mayor" },
  energizantes:{ emoji: "⚡", label: "Energizantes", tagline: "Red Bull 250ml y más energizantes al por mayor" },
  licores:     { emoji: "🍾", label: "Licores",       tagline: "Amplia selección de licores importados y nacionales" },
};

export function generateImageMetadata({ params }) {
  const d = categoryData[params.slug] ?? { label: params.slug };
  return [
    {
      contentType: "image/png",
      size,
      id: params.slug,
      alt: `${d.label} Mayorista en Perú — Perla Negra Licores`,
    },
  ];
}

export default function Image({ params }) {
  const d = categoryData[params.slug] ?? {
    emoji: "🍾",
    label: params.slug,
    tagline: "Licores mayoristas con pedidos por WhatsApp",
  };

  return new ImageResponse(
    (
      <div
        style={{
          background: "#080706",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Halo dorado lateral izquierdo */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "-100px",
            width: "500px",
            height: "500px",
            marginTop: "-250px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(212,175,55,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Barra dorada superior */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "5px",
            background: "linear-gradient(90deg, #d4af37 0%, #f5d98b 50%, #d4af37 100%)",
          }}
        />

        {/* Barra dorada inferior */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "5px",
            background: "linear-gradient(90deg, #d4af37 0%, #f5d98b 50%, #d4af37 100%)",
          }}
        />

        {/* Panel izquierdo — contenido principal */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 0 60px 80px",
            flex: 1,
            zIndex: 1,
          }}
        >
          {/* Marca pequeña */}
          <div
            style={{
              color: "#d4af37",
              fontSize: "13px",
              fontWeight: 900,
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              marginBottom: "28px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            PERLA NEGRA · MAYORISTAS
          </div>

          {/* Emoji grande */}
          <div
            style={{
              fontSize: "72px",
              marginBottom: "10px",
              lineHeight: "1",
            }}
          >
            {d.emoji}
          </div>

          {/* Nombre de categoría */}
          <div
            style={{
              color: "#ffffff",
              fontSize: "94px",
              fontWeight: 900,
              lineHeight: "1",
              marginBottom: "20px",
              letterSpacing: "-3px",
            }}
          >
            {d.label}
          </div>

          {/* Divisor dorado */}
          <div
            style={{
              width: "70px",
              height: "3px",
              background: "#d4af37",
              marginBottom: "22px",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "22px",
              fontFamily: "Arial, sans-serif",
              maxWidth: "560px",
              lineHeight: "1.5",
              marginBottom: "36px",
            }}
          >
            {d.tagline}
          </div>

          {/* Badge WhatsApp */}
          <div
            style={{
              background: "#25d366",
              color: "#fff",
              padding: "12px 30px",
              borderRadius: "50px",
              fontSize: "17px",
              fontWeight: 900,
              fontFamily: "Arial, sans-serif",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              width: "fit-content",
            }}
          >
            📱  Pedir por WhatsApp
          </div>
        </div>

        {/* URL marca de agua */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            right: "32px",
            color: "rgba(255,255,255,0.18)",
            fontSize: "13px",
            fontFamily: "Arial, sans-serif",
            letterSpacing: "0.06em",
          }}
        >
          perlanegra.store
        </div>
      </div>
    ),
    { ...size }
  );
}
