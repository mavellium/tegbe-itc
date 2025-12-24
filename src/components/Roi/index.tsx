"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { Icon } from "@iconify/react";

// Registrar apenas se estiver no cliente
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Roi() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    if (!containerRef.current) return;
    
    const cards = containerRef.current.querySelectorAll(".roi-card");
    
    gsap.set(cards, { opacity: 0, y: 50 });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%", 
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: containerRef });

  return (
    <section
      id="roi"
      ref={containerRef}
      className="w-full bg-[#F4F4F4] py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-6 md:gap-8">

        {/* CARD 1 - MERCADO LIVRE */}
        <div className="roi-card relative overflow-hidden w-full lg:w-1/2 min-h-[500px] lg:h-[700px] bg-[#0A0A0A] rounded-[2rem] p-8 sm:p-10 group shadow-2xl">
          
          {/* Fundo com Zoom suave no Hover */}
          <div className="absolute inset-0">
            <Image
              src="/card1.png"
              fill
              className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700 ease-out"
              alt="Consultoria Mercado Livre"
              quality={90}
            />
            {/* Gradiente para garantir leitura */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          </div>

          {/* Conteúdo */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Ícone ou Badge */}
            <div className="w-12 h-12 bg-[#FFCC00] rounded-xl flex items-center justify-center mb-6 text-black shadow-[0_0_15px_rgba(255,204,0,0.3)]">
                <Icon icon="mdi:handshake-outline" width="28" height="28" />
            </div>

            <div>
              <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-4 leading-tight">
                Consultoria Oficial <br/>
                <span className="text-[#FFCC00]">Mercado Livre.</span>
              </h2>
              
              <div className="w-20 h-1 bg-[#FFCC00] mb-6 rounded-full" />

              <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed max-w-md">
                Inteligência certificada para levar sua conta ao nível <strong className="text-white font-medium">Platinum</strong>.
                Unimos nosso braço operacional à autoridade do maior marketplace
                do país. O selo que valida o nosso conhecimento para garantir o seu resultado.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 2 - SHOPEE */}
        <div className="roi-card relative overflow-hidden w-full lg:w-1/2 min-h-[500px] lg:h-[700px] bg-[#0A0A0A] rounded-[2rem] p-8 sm:p-10 group shadow-2xl">
          
          {/* Fundo */}
          <div className="absolute inset-0">
            <Image
              src="/card2.png"
              fill
              className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700 ease-out"
              alt="Estratégia Shopee"
              quality={90}
            />
            {/* Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>

          {/* Conteúdo */}
          <div className="relative z-10 flex flex-col h-full justify-between">
            
            <div>
              <div className="w-12 h-12 bg-[#FF5722] rounded-xl flex items-center justify-center mb-6 text-white shadow-[0_0_15px_rgba(255,87,34,0.3)]">
                  <Icon icon="mdi:shopping-outline" width="28" height="28" />
              </div>

              <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-4 leading-tight">
                Especialistas em escala <br/>
                <span className="text-[#FF5722]">na Shopee.</span>
              </h2>
              
              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed max-w-md mb-8">
                Dominamos os algoritmos para colocar seus produtos no topo das buscas. 
                Gestão operacional completa para transformar cliques em vendas diárias.
              </p>
            </div>

            {/* Imagem do Celular */}
            <div className="relative w-full flex justify-center mt-auto">
               <div className="absolute bottom-0 w-3/4 h-32 bg-[#FF5722]/20 blur-3xl rounded-full pointer-events-none" />
               
               <div className="relative w-48 sm:w-64 md:w-72 h-auto transform group-hover:-translate-y-2 transition-transform duration-500">
                 <Image
                    src="/celular-roi.png"
                    width={400}
                    height={600}
                    alt="App Shopee Dashboard"
                    className="drop-shadow-2xl"
                    style={{ width: '100%', height: 'auto' }}
                  />
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}