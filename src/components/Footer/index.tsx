"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Icon } from "@iconify/react";

// Hook para scroll suave
function useSmoothScroll() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    const handleClick = (e: Event) => {
      e.preventDefault();
      const target = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (!target) return;

      const element = document.querySelector(target);
      if (!element) return;

      element.scrollIntoView({ behavior: "smooth" });
    };

    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);
}

export function Footer() {
  useSmoothScroll();

  return (
    <footer className="w-full max-w-full flex flex-col justify-center items-center m-0 py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-12 bg-white">
      <div className="container">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center text-center sm:text-start">
          {/* Logo e Instagram - Ocupa toda a largura no mobile, 2 colunas no tablet */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <img 
              src="/tegbe-logo-footer.svg" 
              alt="Mavellium" 
              width={175} 
              height={52} 
              className="w-40 sm:w-48 md:w-52"
            />
            <p className="text-sm sm:text-base font-medium text-black/90">
              Agência de Marketing
            </p>
            <div className="flex flex-row gap-2">
              <Button
                size="icon"
                variant="ghost"
                className="size-8 sm:size-9 p-1 rounded-full hover:bg-gray-100"
              >
                <a
                  href="https://www.instagram.com/mavellium/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="mdi:instagram" className="size-6 sm:size-7 text-black" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="size-8 sm:size-9 p-1 rounded-full hover:bg-gray-100"
              >
                <a
                  href="https://www.instagram.com/mavellium/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="ic:baseline-facebook" className="size-6 sm:size-7 text-black" />
                </a>
              </Button>
            </div>
          </div>

          {/* Empresa */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <h3 className="font-semibold text-base sm:text-lg text-black">Empresa</h3>
            <nav className="flex flex-col space-y-2">
              <a href="/Sobre" className="text-sm text-[#6B7280] hover:text-black transition-colors">
                Sobre
              </a>
              <a href="/Servicos" className="text-sm text-[#6B7280] hover:text-black transition-colors">
                Serviços
              </a>
              <a href="/Cases" className="text-sm text-[#6B7280] hover:text-black transition-colors">
                Cases
              </a>
              <a href="/Contato" className="text-sm text-[#6B7280] hover:text-black transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Serviços */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <h3 className="font-semibold text-base sm:text-lg text-black">Serviços</h3>
            <nav className="flex flex-col space-y-2">
              <a href="/Servicos/LandingPage" className="text-sm text-[#6B7280] hover:text-black transition-colors">
                Gestão Full Commerce
              </a>
              <a href="/Servicos/Institucionais" className="text-sm text-[#6B7280] hover:text-black transition-colors">
                Tráfego & Performance
              </a>
              <a href="/Servicos/Institucionais" className="text-sm text-[#6B7280] hover:text-black transition-colors">
                Setup de Loja Oficial
              </a>
              <a href="/Servicos/Institucionais" className="text-sm text-[#6B7280] hover:text-black transition-colors">
                Consultoria Certificada
              </a>
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <h3 className="font-semibold text-base sm:text-lg text-black">Contato</h3>
            <div className="space-y-2 flex flex-col items-center sm:items-start">
              <a href="mailto:contato@mavellium.com" target="blank_" className="text-sm text-[#6B7280] hover:text-black transition-colors">
                contato@mavellium.com
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=5514991779502&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20desenvolvimento%20web%20da%20empresa.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20solu%C3%A7%C3%B5es%2C%20tecnologias%20e%20valores%20dispon%C3%ADveis%3F" 
                target="blank_" 
                className="text-sm text-[#6B7280] hover:text-black transition-colors"
              >
                (14) 99177-9502
              </a>
            </div>
          </div>
        </div>

        {/* Linha inferior - Responsiva */}
        <div className="border-t mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-black">
          <div className="flex flex-col gap-4 text-sm text-[#6B7280]">
            {/* Copyright */}
            <div className="text-center sm:text-left">
              <p>© 2025 Instituto do Sorriso. Todos os direitos reservados.</p>
            </div>

            {/* Powered by Mavellium - Centralizado no mobile */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
              <div className="flex flex-row items-center gap-2 order-2 sm:order-1">
                <span className="text-sm sm:text-md">Desenvolvido por</span>
                <Image
                  src="/mavellium-logo-footer.svg"
                  alt="Logo Mavellium"
                  width={110}
                  height={45}
                  className="w-24 sm:w-28"
                />
              </div>

              {/* Informações dos profissionais - Empilhado no mobile */}
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left order-1 sm:order-2 mb-4 sm:mb-0">
                <span className="text-xs sm:text-sm">Dr. Calebe Jr. - CRO/RT: 108562/SP</span>
                <span className="hidden sm:inline">|</span>
                <span className="text-xs sm:text-sm">Dra. Luana - CRO/RT: 108581/SP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}