'use client';

import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Video from "@/components/Video";
import SellMore from "@/components/SellMore";
import { Cards, defaultRoiData } from "@/components/Cards";
import Plataforms from "@/components/Steps/Plataforms";
import Logos from "@/components/Logos";
import Cards2 from "@/components/Cards/Cards2";
import Companys from "@/components/News/Companys";
import { Footer } from "@/components/Footer";
import Schema from "@/components/Schema";

export default function EcommercePage() {
    <Schema
        data={{
            "@context": "https://schema.org",
            "@type": "Service",
            name: "E-commerce",
            provider: {
                "@type": "Organization",
                name: "Tegbe",
            },
        }}
    />
    return (
        <>
            <Header />
            <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#020202] selection:bg-yellow-500/30 pt-[80px] pb-[20px]">

                {/* --- CAMADA 1: Atmosfera & Profundidade --- */}

                {/* Grid sutil para dar ar "Tech" (Opcional, mas adiciona textura) */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

                {/* Spotlight Central - Foca o olhar no centro da tela */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] opacity-40 mix-blend-screen pointer-events-none" />

                {/* Sombra inferior para fusão com a próxima seção */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020202] to-transparent z-10" />

                {/* --- CAMADA 2: Conteúdo --- */}
                <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">

                    {/* Badge "Oficial" - Pequeno e elegante */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-inner"
                    >
                        <Icon icon="mdi:check-decagram" className="text-[#FFCC00] w-4 h-4" />
                        <span className="text-[11px] md:text-xs font-semibold tracking-widest text-gray-300 uppercase">
                            Consultoria Oficial Mercado Livre
                        </span>
                    </motion.div>

                    {/* Headline Principal */}
                    <div className="max-w-5xl mx-auto mb-8">
                        <h2 className="flex text-xl sm:text-2xl md:text-3xl lg:text-4xl justify-center flex-col sm:flex-row font-medium text-gray-400 mb-2 sm:mb-4 tracking-tight">
                            Sua marca não foi feita para ficar parada.
                        </h2>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.9] mt-2"
                        >
                            ELA FOI FEITA <br className="hidden sm:block" />
                            <span className="text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.15)]">
                                PARA VENDER.
                            </span>
                        </motion.h1>
                    </div>

                    {/* Subtítulo Otimizado */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="max-w-2xl mx-auto text-base sm:text-xl text-gray-400 leading-relaxed mb-12 font-light tracking-wide"
                    >
                        Unimos tecnologia, gestão de elite e as <strong className="text-gray-100 font-medium border-b border-yellow-500/50 pb-0.5">estratégias de quem domina os algoritmos</strong>.
                        Se o seu objetivo é ver o gráfico de vendas subir todos os dias, você está no lugar certo.
                    </motion.p>

                    {/* CTA de Alta Conversão - Estilo Mavellium */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <a href="#planos" className="group relative">
                            {/* Glow effect atrás do botão */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full opacity-30 blur-lg group-hover:opacity-60 transition duration-500"></div>

                            <Button className="relative px-10 py-7 rounded-full bg-[#FFCC00] text-black font-bold text-lg tracking-tight hover:bg-[#ffdb4d] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.4)] border border-yellow-500/20 flex items-center gap-3">
                                QUERO VENDER MAIS AGORA
                                <Icon icon="lucide:arrow-right" className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </a>

                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span>Agenda de Janeiro aberta</span>
                        </div>
                    </motion.div>

                </div>
            </section>
            <Video />
            <SellMore />
            <Cards data={defaultRoiData} />
            <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row bg-[#111111] rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden">

                        {/* Coluna de Texto */}
                        <div className="lg:w-2/5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Operação Blindada.
                            </h1>
                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                Cuidamos da sua reputação para que nada pare o seu crescimento.
                                No Mercado Livre e na Shopee, medalha no peito é sinônimo
                                de mais dinheiro no bolso.
                            </p>

                            {/* Botão CTA opcional */}
                            <button className="mt-6 w-full sm:w-auto bg-yellow-500 text-black font-bold hover:bg-yellow-600 py-3 px-6 rounded-lg transition-colors duration-300">
                                Proteger Minha Loja
                            </button>
                        </div>

                        {/* Coluna de Imagens */}
                        <div className="lg:w-3/5 p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row gap-4 items-center justify-center">

                            {/* Container responsivo para imagens */}
                            <div className="relative w-full sm:w-1/2 h-50 sm:h-80 md:h-80 lg:h-55 flex justify-center items-center aspect-video rounded-xl overflow-hidden">
                                <Image
                                    src="/platinum.png"
                                    alt="Operação Blindada - Mercado Livre"
                                    width={300}
                                    height={300}
                                    className="object-cover"
                                />
                            </div>

                            <div className="relative w-full sm:w-1/2 h-50 sm:h-80 md:h-80 lg:h-58 flex justify-center items-center aspect-video rounded-xl overflow-hidden">
                                <Image
                                    src="/shopee.png"
                                    alt="Operação Blindada - Shopee"
                                    width={300}
                                    height={300}
                                    className="object-cover"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Plataforms />
            <Logos />
            <Cards2 />
            <section className="relative w-full flex flex-col overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] 2xl:min-h-[900px]">
                {/* Imagem de fundo */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Imagem.png"
                        alt="Background"
                        className="w-full h-full object-cover object-right sm:object-top md:object-center lg:object-center"
                        loading="lazy"
                    />
                </div>

                {/* Efeito de escurecido (gradiente inferior) */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/40 to-transparent 
        sm:from-black/70 sm:via-black/30 sm:to-transparent
        md:from-black/60 md:via-black/20 md:to-transparent
        lg:from-black/60 lg:via-transparent lg:to-transparent" />
            </section>
            <section
                className="py-24 w-full flex flex-col justify-center items-center bg-[#050505] px-5 relative overflow-hidden"
            >
                {/* Background Glow Sutil (Opcional - Estilo Mavellium) */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container flex flex-col justify-center relative z-10">

                    {/* Texto Intro */}
                    <div className="flex flex-col items-center text-center w-full mb-12 text-white">
                        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight max-w-4xl text-white">
                            Por que vender com a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC00] to-yellow-600"> Tegbe </span>
                            e não sozinho?
                        </h1>

                        <h2 className="text-base sm:text-lg text-gray-400 font-light leading-relaxed max-w-3xl">
                            Vender online sozinho é tentar a sorte. <strong className="text-white font-medium">Vender com a Tegbe é aplicar um método validado. </strong> O Mercado Livre não perdoa amadores.
                            Nós conhecemos as regras ocultas do algoritmo e jogamos para dominar, não apenas para participar.
                        </h2>
                        <a href="#" className="flex justify-center pt-10">
                            <span className="font-medium px-6 py-4 bg-[#0071E3] text-white rounded-full">
                                Falar com um Especialista
                            </span>
                        </a>
                    </div>
                </div>
            </section>
            <Companys />
            <section
                className="py-24 w-full flex flex-col justify-center items-center bg-[#050505] px-5 relative overflow-hidden"
            >

                <div className="container flex flex-col justify-center relative z-10">

                    {/* Texto Intro */}
                    <div className="flex flex-col items-center text-center w-full mb-12 text-white">
                        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight max-w-4xl text-white">
                            O próximo case de sucesso <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC00] to-yellow-600">será o seu.</span>
                        </h1>

                        <h2 className="text-base sm:text-lg text-gray-400 font-light leading-relaxed max-w-3xl">
                            Vamos analisar sua operação atual e traçar o plano de guerra para sua marca dominar o mercado.
                        </h2>
                        <a href="#" className="flex justify-center pt-10">
                            <span className="font-medium px-6 py-4 bg-[#0071E3] text-white rounded-full">
                                SOLICITAR MEU DIAGNÓSTICO DE VENDAS
                            </span>
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}