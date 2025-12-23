"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    logo: "/Image-news.png",
    name: "Decora Fest",
    description: "Loja de Decorações para Festas em Garça/SP",
    result: "Aumento de 30% nas Vendas desde o que estão conosco"
  },
  {
    id: 2,
    logo: "/Image-news.png",
    name: "Tech Solutions",
    description: "Empresa de Tecnologia em São Paulo/SP",
    result: "Redução de 40% no tempo de atendimento ao cliente"
  },
  {
    id: 3,
    logo: "/Image-news.png",
    name: "Bella Moda",
    description: "Boutique de Moda Feminina em Marília/SP",
    result: "Crescimento de 50% no engajamento nas redes sociais"
  },
  {
    id: 4,
    logo: "/Image-news.png",
    name: "Sabor & Arte",
    description: "Restaurante Gourmet em Bauru/SP",
    result: "Aumento de 25% nas reservas online"
  },
  {
    id: 5,
    logo: "/Image-news.png",
    name: "FitLife Academia",
    description: "Academia Premium em Ribeirão Preto/SP",
    result: "45% mais matrículas após parceria"
  },
  {
    id: 6,
    logo: "/Image-news.png",
    name: "Pet Care Plus",
    description: "Pet Shop e Veterinária em Campinas/SP",
    result: "Triplicou o número de clientes recorrentes"
  }
];

export default function News() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const x = useMotionValue(0);

  // Responsive card width and gap
  const getCardWidth = () => {
    if (containerWidth < 640) return containerWidth - 80; // mobile: full width with padding
    if (containerWidth < 768) return containerWidth * 0.8; // tablet: 80% width
    return 320; // desktop: fixed width
  };

  const getCardGap = () => {
    if (containerWidth < 640) return 16;
    if (containerWidth < 768) return 20;
    return 24;
  };

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const cardWidth = getCardWidth();
  const cardGap = getCardGap();
  const visibleCards = containerWidth < 640 ? 1 : 
                       containerWidth < 768 ? 2 : 
                       Math.floor(containerWidth / (cardWidth + cardGap));
  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  const handleNext = () => {
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    setCurrentIndex(newIndex);
    animate(x, -newIndex * (cardWidth + cardGap), {
      type: "spring",
      stiffness: 300,
      damping: 30
    });
  };

  const handlePrev = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);
    animate(x, -newIndex * (cardWidth + cardGap), {
      type: "spring",
      stiffness: 300,
      damping: 30
    });
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    setIsDragging(false);
    const threshold = 50;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    let newIndex = currentIndex;

    if (offset < -threshold || velocity < -500) {
      newIndex = Math.min(currentIndex + 1, maxIndex);
    } else if (offset > threshold || velocity > 500) {
      newIndex = Math.max(currentIndex - 1, 0);
    }

    setCurrentIndex(newIndex);
    animate(x, -newIndex * (cardWidth + cardGap), {
      type: "spring",
      stiffness: 300,
      damping: 30
    });
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10 text-center sm:text-left">
          Seja que nem eles
        </h2>

        <div className="relative" ref={containerRef}>
          <div className="overflow-hidden px-2 sm:px-0">
            <motion.div
              className="flex"
              style={{ x, gap: `${cardGap}px` }}
              drag="x"
              dragConstraints={{
                left: -maxIndex * (cardWidth + cardGap),
                right: 0
              }}
              dragElastic={0.1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
            >
              {testimonials.map((item, index) => {
                const cardX = useTransform(
                  x,
                  [
                    -(index + 1) * (cardWidth + cardGap),
                    -index * (cardWidth + cardGap),
                    -(index - 1) * (cardWidth + cardGap)
                  ],
                  [0, 1, 1]
                );

                const opacity = useTransform(cardX, [0, 0.5, 1], [0.3, 0.8, 1]);
                const scale = useTransform(cardX, [0, 0.5, 1], [0.9, 0.95, 1]);

                return (
                  <motion.div
                    key={item.id}
                    className="flex-shrink-0 cursor-grab active:cursor-grabbing"
                    style={{
                      width: cardWidth,
                      opacity,
                      scale
                    }}
                    whileHover={{ y: containerWidth < 768 ? 0 : -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-transparent rounded-2xl duration-300">
                      <div className="aspect-square rounded-xl bg-gradient-to-br from-white to-gray-600 flex items-center justify-center mb-4 sm:mb-5 overflow-hidden">
                        <motion.img
                          src={item.logo}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: containerWidth < 768 ? 1 : 1.05, rotate: containerWidth < 768 ? 0 : 2 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mb-2">
                        {item.description}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                        {item.result}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Navigation Buttons - Hidden on mobile, visible on tablet and desktop */}
          <div className="flex justify-center sm:justify-end gap-2 mt-6 sm:mt-8">
            <motion.button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-600 hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center text-white transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <motion.button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-600 hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center text-white transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>

          {/* Progress Dots - Always visible, smaller on mobile */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  animate(x, -index * (cardWidth + cardGap), {
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  });
                }}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-6 sm:w-8 bg-gray-700' 
                    : 'w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}