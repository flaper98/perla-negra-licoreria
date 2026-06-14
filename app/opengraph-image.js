import { ImageResponse } from "next/og";

export const alt = "Perla Negra — Licores Mayoristas en Perú";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080706",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Halo dorado central */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "700px",
            height: "700px",
            marginTop: "-350px",
            marginLeft: "-350px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(212,175,55,0.10) 0%, transparent 70%)",
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
            background: "linear-gradient(90deg, transparent, #d4af37 30%, #d4af37 70%, transparent)",
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
            background: "linear-gradient(90deg, transparent, #d4af37 30%, #d4af37 70%, transparent)",
          }}
        />

        {/* Contenido principal */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          {/* Etiqueta superior */}
          <div
            style={{
              color: "#d4af37",
              fontSize: "13px",
              fontWeight: 900,
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              marginBottom: "22px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            DISTRIBUIDORA MAYORISTA · PERÚ
          </div>

          {/* Nombre principal */}
          <div
            style={{
              color: "#ffffff",
              fontSize: "100px",
              fontWeight: 900,
              lineHeight: "1",
              marginBottom: "18px",
              letterSpacing: "-3px",
            }}
          >
            Perla Negra
          </div>

          {/* Divisor dorado */}
          <div
            style={{
              width: "90px",
              height: "3px",
              background: "#d4af37",
              marginBottom: "22px",
            }}
          />

          {/* Subtítulo */}
          <div
            style={{
              color: "#d4af37",
              fontSize: "30px",
              fontWeight: 700,
              marginBottom: "24px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Licores Mayoristas en Perú
          </div>

          {/* Categorías */}
          <div
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "17px",
              fontFamily: "Arial, sans-serif",
              letterSpacing: "0.08em",
              marginBottom: "38px",
            }}
          >
            Whisky · Vodka · Ron · Gin · Tequila · Vinos · Pisco · Champagne
          </div>

          {/* Badge WhatsApp */}
          <div
            style={{
              background: "#25d366",
              color: "#ffffff",
              padding: "14px 38px",
              borderRadius: "50px",
              fontSize: "19px",
              fontWeight: 900,
              fontFamily: "Arial, sans-serif",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            📱  Pedidos por WhatsApp: +51 970 820 056
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
