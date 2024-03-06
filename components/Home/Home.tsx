"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HomePage = () => {
  return (
    <>
      <section className="lg:py-10 mx-8 flex flex-col justify-center items-center sm:mx-16 lg:mx-32 max-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h2 className="text-white my-4 text-3xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
                Olá, Eu sou
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "Front Developer",
                  2000,
                  "Mobile Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="text-xs md:text-lg mb-2 text-white tracking-[3px]">
              Bem vindo, meu nome é Renato e sou Desenvolvedor Front End com 1
              ano de experiência, formado em Análise e Desenvolvimento de
              Sistemas, com foco em criar aplicações web e mobile escaláveis e
              com alta cobertura de testes. Nas principais stacks Frontend:
              JavaScript/Typescript, React, NextJs, React Native, ReactQuery,
              Jest/Testing Library
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center my-4 lg:mt-0"
          >
            <div className="mt-3 rounded-full bg-gray-700 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src="/images/hero-image.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
                width={400}
                height={400}
                priority={true}
              />
            </div>
          </motion.div>
        </div>
        <div className="flex flex-row gap-3 mx-5 w-full">
          <button
            onClick={() => {
              window.location.href = "https://github.com/Renatofujimoto";
            }}
            type="button"
            className="mb-2 w-32 flex justify-center items-center rounded bg-[#696969] px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium  leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          >
            <FaGithub className="h-5 w-5 mr-2" />
            GitHub
          </button>
          <button
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/renato-fujimoto-1321b71b0/";
            }}
            type="button"
            className="mb-2 w-32 flex justify-center items-center rounded bg-[#0a66c2] px-6 pb-2 pt-2.5 text-xs font-medium  leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          >
            <FaLinkedin className="h-6 w-6 mr-2" />
            LinkedIn
          </button>
          <button
            onClick={() => {
              window.location.href = "mailto:renatofujimoto2@gmail.com";
            }}
            type="button"
            className="mb-2 w-28 flex justify-center items-center rounded bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium  leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          >
            <MdEmail className="h-6 w-6 mr-2" />
            Email
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
