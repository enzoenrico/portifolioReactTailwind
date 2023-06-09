import React from "react";
import Title from "./Title";
import Hobbies from "./Hobbies";
import about from "../data/about";

function About() {
  return (

    // TODO Arrumar fonrmatação do about, quando grande um do lado do outro, quando pequeno um em cima do outro
    //TODO Adicionar cor e borda aos elementos do hobbie
    <div>
      <Title>Sobre mim</Title>
      <div className="flex flex-row md:flex-col">
        <div className="flex flex-col items-center justify-center p-1.5 md:w-1/2">
          <div className="bg-stone-700 rounded-md p-3 my-5">
            ~👾 Sou um estudante, desenvolvedor e apaixonado por técnologia.
            Comecei a programar com meus 13 anos, experimentando com Python e
            jogos em CLI, ao passar dos anos percebi que isso era minha paixão,
            e desde então venho sempre trazendo minhas idéias à vida usando
            Software e Hardware!
          </div>
          <div className="bg-stone-700 rounded-md p-3 my-5">
            Recentemente iniciei meu primeiro estágio{" "}
            <a
              href="https://www.akersolutions.com"
              className="dark:text-blue-600 text-pink-500 hover:text-blue-900 hover:underline decoration-2 transition-colors duration-300 hover:cursor-pointer"
            >
              @AkerSolutions!
            </a>
            Desenvolvendo ferramentas internas, auxiliando desenvolvedores e
            sempre dando meu melhor para poder aprender!
          </div>
        </div>

        <div>
          <Title>Alguns hobbies meus!</Title>
          <div className="flex flex-col items-center justify-center p-1.5 md:w-1/2">
            {about.map((hobbie) => (
              <Hobbies
                imgUrl={hobbie.imgUrl}
                desc={hobbie.desc}
                hobbie={hobbie.hobbie}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
