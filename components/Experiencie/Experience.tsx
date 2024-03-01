"use client";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const Experience = () => {
  return (
    <div className="py-8 bg-[#121212]">
      <h3 className="tracking-[15px] text-center my-10 uppercase text-slate-400 text-xl md:text-3xl">
        Experience
      </h3>
      <div className="hidden md:block container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full w-screen bg-[#121212]">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-400 h-full border"
            style={{ left: "50%" }}
          ></div>
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline bg-[#121212]">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
              <CodeBracketIcon className="h-5 w-5 mx-auto text-black" />
            </div>
            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <div>
                <div className="flex flex-col justify-center items-start md:flex-row w-full">
                  <div className="mt-3 flex flex-col items-start">
                    <Link
                      href="https://shopyvilladevelopers.com/"
                      className="text-sm md:text-2xl mb-4 text-white tracking-[5px] uppercase"
                    >
                      We Laborate
                    </Link>
                    <p className="text-xs md:text-lg mb-2 text-slate-400 uppercase tracking-[5px]">
                      Desenvolvedor Front-end Junior
                    </p>
                    <p className="text-xs md:text-lg mb-2 text-slate-400 uppercase tracking-[5px]">
                      <span className="text-white">Junho</span> 2023 -{" "}
                      <span className="text-white">Março</span> 2024
                    </p>

                    <p className="text-sm mb-3 mt-3 text-white leading-5">
                      Como FrontEnd Developer, fui alocado para um projeto
                      financeiro onde desenvolvemos o front end dessa aplicação
                      web, trazendo ideias inovadoras de design e maneira mais
                      eficientes e práticas para a melhoria do SEO também
                    </p>
                    <p className="text-sm mb-3 mt-3 text-white leading-5">
                      - Desenvolvimento do frontend utilizando React com o
                      framework Nextjs.
                    </p>
                    <p className="text-sm mb-3 text-white leading-5">
                      - Apliquei testes unitários com Jest e Testing Library
                      para melhoria e segurança da aplicação.
                    </p>
                    <p className="text-sm mb-3 text-white leading-5">
                      - Melhoria da documentação do time FrontEnd adicionando
                      storybook.
                    </p>
                    <p className="text-sm mb-3 text-white leading-5">
                      - Implementação do React Query para uma melhor manipulação
                      e cache das requisições http.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* segunda experiencia */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline bg-[#121212]">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full">
              <CodeBracketIcon className="h-5 w-5 mx-auto text-black" />
            </div>
            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <div className="flex flex-col items-start">
                <Link
                  href="https://skynox.tech/"
                  className="text-sm md:text-2xl mb-2 text-white tracking-[5px] uppercase"
                >
                  Cooper Screen{" "}
                </Link>
                <p className="text-xs md:text-lg mb-2 text-slate-400 uppercase tracking-[5px]">
                  Designer Gráfico
                </p>
                <p className="text-xs md:text-lg mb-2 text-slate-400 uppercase tracking-[5px]">
                  <span className="text-white">Março</span> 2020 -{" "}
                  <span className="text-white">Junho</span> 2023
                </p>
                <p className="text-xs md:text-lg mb-2 text-slate-400 uppercase tracking-[5px]">
                  Mohali, <span className="text-white">India</span>
                </p>
                <p className="text-sm mb-3 text-slate-400 leading-5">
                  - Desenvolvimento de todo material digital dos clientes ( Arte
                  para Midias Sociais, cartão de visitas e uniformes
                  personalizados )
                </p>
                <p className="text-sm mb-3 text-slate-400 leading-5">
                  - Inclui uma melhoria na identidade das marcas dos clientes,
                  trazendo conceitos de design atual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Experience };
