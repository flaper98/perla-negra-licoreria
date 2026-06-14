"use client";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-black">
      <div className="relative h-[420px] md:h-[520px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video/video_portada.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pt-24">
          <div className="max-w-xl text-white">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
              Perla Negra
            </p>

            <h1 className="mb-4 text-4xl font-black leading-tight md:text-6xl">
              LICORES AL POR MAYOR Y MENOR
            </h1>

            <p className="mb-6 text-base text-white/85 md:text-xl">
              Abastece tu negocio con licores originales, precios mayoristas y
              atención directa por WhatsApp. ¡Compra fácil y rápido con
              nosotros!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
