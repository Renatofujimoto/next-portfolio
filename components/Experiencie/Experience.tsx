"use client";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const Experience = () => {
  return (
    <div className="container mx-auto">
      <div className="py-8 bg-[#121212]">
        <div className="relative wrap overflow-hidden h-full w-screen bg-[#121212]">
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline bg-[#121212]">
            <div className="order-1 rounded-lg shadow-xl w-full px-6 py-4">
              <div>
                <h3 className="tracking-[15px] text-center my-10 uppercase text-slate-400 text-xl md:text-3xl">
                  Expêriencia{" "}
                </h3>
                <div className="flex flex-col justify-center items-start md:flex-row w-full">
                  <div className="mt-3 flex flex-col items-start">
                    <h1 className="text-sm md:text-2xl mb-4 text-white tracking-[5px] uppercase">
                      We Laborate
                    </h1>
                    <p className="text-xs md:text-lg mb-2 text-slate-400 uppercase tracking-[5px]">
                      Desenvolvedor Front-end Junior
                    </p>
                    <p className="text-xs md:text-lg mb-2 text-slate-400 uppercase tracking-[5px]">
                      <span className="text-white">Junho</span> 2023 -{" "}
                      <span className="text-white">Março</span> 2024
                    </p>

                    <p className="text-sm mb-3 mt-3 text-white leading-5">
                      Como FrontEnd Developer, fui alocado para um projeto
                      <br></br>
                      financeiro onde desenvolvemos o front end dessa aplicação
                      web,trazendo ideias inovadoras de design e maneira mais
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
        </div>
      </div>
    </div>
  );
};

export { Experience };
