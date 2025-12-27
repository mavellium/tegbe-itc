'use client'
import Image from 'next/image'

export default function Cards2() {
  return (
    <section className="px-4 sm:px-8 py-24">
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto items-center justify-center">

        {/* CARD IMAGEM */}
        <div className="bg-[#DBDBDB] w-full lg:w-1/2 max-w-[500px] min-h-[320px] rounded-4xl overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/"
              alt="Card Image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* CARD TEXTO */}
        <div className="bg-[#DBDBDB] w-full lg:w-1/2 max-w-[500px] min-h-[300px] rounded-4xl p-7 flex flex-col justify-center gap-2 text-start lg:text-left">
          <h1 className="font-bold text-lg text-black">
            A segurança de uma Consultoria Certificada pelo Mercado Livre.
          </h1>

          <p className="text-black/80">
            Ser um parceiro oficial vai além de um selo. Significa acesso
            a dados privilegiados, suporte direto da plataforma e estratégias
            validadas pelo próprio Mercado Livre. Entenda o peso dessa parceria.
          </p>

          <a href="#" className="flex justify-center pt-10">
            <span className="font-medium px-6 py-4 bg-[#0071E3] text-white rounded-full">
              Saiba o que é a Consultoria Oficial
            </span>
          </a>
        </div>

      </div>
    </section>
  )
}
