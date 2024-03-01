"use client";
import React, { useState } from "react";
import { useTransition } from "react";
import Image from "next/image";
import TabButton from "../../components/About/TabButton";
import DownloadButton from "@/components/Home/DownloadButton";

import Skills from "@/components/BannerSkills/skillsBanner";
import { Experience } from "@/components/Experiencie/Experience";

interface TabData {
  title: string;
  id: string;
  content: JSX.Element;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>TypeScript</li>
        <li>React</li>
        <li>Next Js</li>
        <li>Jest/Testing Library</li>
        <li>React Query</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Universidade Anhanguera - Análise e Desenvolvimento de Sistemas</li>
        <li>DNC - Python</li>
        <li>Rockeseat - Discover</li>
        <li>Curso Em Vídeo - JavaScript ES6</li>
        <li>Curso Em Vídeo - HTML 5 e CSS 3</li>
        <li>Bootcamp Santander FullStack Developer</li>
        <li>Udemy - React</li>
      </ul>
    ),
  },
];

const TAB_DATA2: TabData[] = [
  {
    title: "Empresas",
    id: "empresas",
    content: (
      <ul className="list-disc pl-2">
        <p>Front end - 06/2023 - até o momento </p>
        <p>Tecnologias:</p>
        <li>Typescript</li>
        <li>React</li>
        <li>Next Js</li>
        <li>Jest/Testing Library</li>
        <li>React Query</li>
      </ul>
    ),
  },
  {
    title: "design",
    id: "design",
    content: (
      <ul className="list-disc pl-2">
        <p>Design Gráfico - 03/2020 - 06/2023 </p>
        <p>Tecnologias:</p>
        <li>Photoshop</li>
        <li>Ilustrator</li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [tab2, setTab2] = useState<string>("design");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <>
      <main className="flex lg:h-full flex-col pt-7 bg-[#121212]">
        <section className="text-white">
          <div className="md:grid md:grid-cols-2 gap-4 items-center py-8 px-5 xl:gap-16 sm:py-16 xl:px-16">
            <Image
              src="/images/mario.gif"
              width={500}
              height={500}
              alt={"imagem de perfil"}
              priority={true}
              className="rounded-full shadow-2xl"
            />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
              <h3 className="tracking-[15px] text-center my-10 uppercase text-slate-400 text-xl md:text-3xl">
                Sobre Mim
              </h3>
              <p className="text-xs md:text-lg mb-2 text-white tracking-[3px]">
                Sou um desenvolvedor FrontEnd apaixonado por criar aplicações
                web interativas e responsivas. eu tenho experiencia trabalhando
                com JavaScript, React, NextJs, ReactQuery, Jest/Testing Library
                e Git.
                <br></br>
                Eu aprendo rápido e estou sempre buscando expandir meu
                conhecimento e conjunto de habilidades.
                <br></br>Meu foco principal é não apenas criar interfaces
                atraentes e funcionais, mas também garantir a otimização e a
                acessibilidade em todos os projetos. <br></br>Além do
                desenvolvimento de front-end, também possuo habilidades em
                integração de APIs, UX/UI design e colaboração em equipes
                multidisciplinares, o que me permite contribuir de forma
                abrangente em projetos complexos.
              </p>

              <div className="px-1 inline-block py-1  w-full sm:w-fit rounded-full bg-gradient-to-br from-gray-400 to-gray-600 hover:bg-slate-800 text-white mt-5">
                <span className="block text-center bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  <DownloadButton />
                </span>
              </div>
              <div className="flex justify-center my-6 gap-4">
                <Skills />
              </div>
              <div className="flex flex-col sm:flex-row justify-start mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
                <TabButton
                  selectTab={() => handleTabChange("skills")}
                  active={tab === "skills"}
                >
                  Skills
                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("education")}
                  active={tab === "education"}
                >
                  Education
                </TabButton>
              </div>
              <div className="mt-8 sm-mt-12">
                {TAB_DATA.find((t) => t.id === tab)?.content}
              </div>
            </div>
            <div className=" md:mt-0 text-left flex flex-col h-screen mb-7">
              <Experience />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutSection;
