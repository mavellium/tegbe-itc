"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image"; // Importação vital para performance
import "swiper/css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Setors() {
  const cards = [
    {
      id: 1,
      image: "/growth-1.png",
      title: "**Fim do \"Acha que sabe\".** O algoritmo muda toda semana. Pare de testar na sorte. Aplicamos metodologias validadas de Consultoria Oficial para garantir que sua loja jogue com as regras certas e não seja penalizada.",
    },
    {
      id: 2,
      image: "/growth-2.png",
      title: "**Sua Hora Vale Ouro.** Você deve focar em estratégia, fornecedores e novos produtos. Deixe a \"guerra\" de cliques, atendimento, expedição e gestão de anúncios com quem respira isso 24h por dia.",
    },
    {
      id: 3,
      image: "/growth-3.png",
      title: "**Custo Fixo Inteligente.** Montar uma equipe interna de marketing, design e logística custa caro e dá dor de cabeça. Na Tegbe, você acessa um time multidisciplinar sênior por uma fração desse custo.",
    },
    {
      id: 4,
      image: "/growth-4.png",
      title: "**Padrão de Loja Oficial.** Fotos de celular e descrições genéricas matam sua margem. Elevamos sua marca com design profissional e copy persuasiva que transmitem autoridade e justificam seu preço.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false); // Novo estado para UX
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const swiperRef = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const desktopCardsRef = useRef<HTMLDivElement>(null);

  function renderBoldText(text: string) {
    return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-bold text-black">
            {part.replace(/\*\*/g, "")}
          </strong>
        );
      }
      return <span key={index} className="text-gray-600">{part}</span>;
    });
  }

  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth !== null && windowWidth < 768;

  // Autoplay Inteligente (Desktop)
  useEffect(() => {
    if (isMobile || !isPlaying || isHovering) return; // Pausa se estiver com mouse em cima

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile, isPlaying, isHovering, cards.length]);

  // Controle Swiper (Mobile)
  useEffect(() => {
    if (!swiperRef.current) return;
    if (isMobile) {
      if (isPlaying) {
        swiperRef.current.autoplay?.start();
      } else {
        swiperRef.current.autoplay?.stop();
      }
    }
  }, [isMobile, isPlaying]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    if (isMobile && swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  // Animação GSAP Desktop
  useGSAP(() => {
    if (!desktopCardsRef.current || isMobile) return;
    const cardsEl = desktopCardsRef.current.querySelectorAll('.desktop-card');
    gsap.set(cardsEl, { opacity: 0, y: 50, scale: 0.9 });

    const animation = gsap.to(cardsEl, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, { dependencies: [isMobile], scope: sectionRef });

  // Animação GSAP Mobile
  useGSAP(() => {
    if (!isMobile) return;
    const cardsEl = document.querySelectorAll('.mobile-card');
    gsap.set(cardsEl, { opacity: 0, y: 30 });

    const animation = gsap.to(cardsEl, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, { dependencies: [isMobile], scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="py-20 w-full flex flex-col justify-center items-center bg-[#F4F4F4] px-4"
      id="setors"
    >
      <div className="container flex flex-col justify-center items-center">
        
        {/* Título Centralizado */}
        <div className="text-center max-w-4xl mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight">
            Por que centralizar a operação está <span className="text-[#FFCC00]">travando</span> o seu crescimento?
          </h2>
        </div>

        {/* 🟢 MOBILE - Swiper */}
        {isMobile && (
          <div className="w-full overflow-visible">
            <Swiper
              modules={[Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              centeredSlides={true}
              slidesPerView={0.9}
              spaceBetween={16}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="w-full"
            >
              {cards.map((card, index) => (
                <SwiperSlide key={card.id} className="overflow-visible">
                  <motion.div
                    onClick={() => setActiveIndex(index)}
                    className="flex flex-col items-center mobile-card"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-md cursor-pointer w-[92vw] max-w-[600px] mx-auto h-[340px] sm:h-[360px]">
                      <Image
                        src={card.image}
                        alt="Growth Tegbe"
                        fill
                        className="object-cover object-center rounded-2xl"
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 rounded-2xl flex flex-col items-start p-4 w-[95%]"
                    >
                      <h2 className="text-lg font-medium mb-3 leading-relaxed">
                        {renderBoldText(card.title)}
                      </h2>
                    </motion.div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* 🟣 DESKTOP */}
        {isClient && !isMobile && (
          <div 
            ref={desktopCardsRef} 
            className="flex justify-center flex-wrap gap-4 relative"
            onMouseEnter={() => setIsHovering(true)} // Pausa ao passar o mouse
            onMouseLeave={() => setIsHovering(false)} // Retoma ao sair
          >
            {cards.map((card, index) => {
              const isActive = index === activeIndex;
              const activeWidth = windowWidth < 1024 ? 260 : 420;
              const inactiveWidth = windowWidth < 1024 ? 140 : windowWidth < 1536 ? 160 : 320;

              return (
                <motion.div
                  key={card.id}
                  layout
                  className="flex flex-col items-center relative desktop-card"
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  style={{ minWidth: inactiveWidth }}
                >
                  <motion.div
                    layout
                    onClick={() => setActiveIndex(index)}
                    animate={{
                      opacity: isActive ? 1 : 0.5, // Mais contraste nos inativos
                      width: isActive ? activeWidth : inactiveWidth,
                      scale: isActive ? 1 : 0.98,
                      filter: isActive ? "grayscale(0%)" : "grayscale(100%)", // Efeito elegante nos inativos
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className={`relative cursor-pointer overflow-hidden rounded-2xl shadow-lg border-2 ${isActive ? "border-[#FFCC00]" : "border-transparent"}`}
                  >
                    <div className="relative w-full h-[600px]">
                        <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover object-top"
                        />
                    </div>
                    {/* Overlay escuro nos inativos */}
                    {!isActive && <div className="absolute inset-0 bg-black/40 transition-colors duration-300" />}
                  </motion.div>

                  <AnimatePresence mode="sync">
                    {isActive && (
                      <motion.div
                        key={`desc-${card.id}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="absolute top-full mt-6 rounded-2xl p-2 z-10 flex flex-col items-start text-left"
                        style={{ width: activeWidth, maxWidth: 360 }}
                      >
                        <h2 className="text-lg md:text-xl font-medium leading-relaxed">
                          {renderBoldText(card.title)}
                        </h2>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* 🔘 CONTROLES - Estilo Mavellium */}
        <div className="flex items-center justify-center mt-20 md:mt-64 gap-6">
          
          {/* Dots */}
          <div className="flex gap-3 bg-white border border-gray-200 h-14 px-6 rounded-full justify-center items-center shadow-lg">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? "bg-[#FFCC00] w-8 h-2.5 shadow-[0_0_10px_#FFCC00]" // Ativo Ouro
                    : "bg-gray-300 w-2.5 h-2.5 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Play/Pause */}
          <Button
            onClick={() => setIsPlaying((prev) => !prev)}
            className="flex items-center justify-center bg-white border border-gray-200 text-gray-800 hover:bg-[#FFCC00] hover:text-black hover:border-[#FFCC00] rounded-full h-14 w-14 shadow-lg transition-all duration-300"
          >
            {isPlaying ? (
              <Icon icon="solar:pause-bold" className="w-6 h-6" />
            ) : (
              <Icon icon="solar:play-bold" className="w-6 h-6 ml-1" />
            )}
          </Button>

        </div>
      </div>
    </section>
  );
}