import React from "react";
import Title from "./Title";
import Hobbies from "./Hobbies";
import about from "../data/about";

function About() {
  return (
    // TODO Arrumar fonrmatação do about, quando grande um do lado do outro, quando pequeno um em cima do outro
    //TODO Adicionar cor e borda aos elementos do hobbie
    <div className=" p-3">
      <Title>Sobre mim</Title>
      <div className="flex flex-col md:flex-row my-5 lg:w-fit justify-evenly items-center">
        <div className="flex flex-col max-h-1/2 lg:w-1/3 sm:w-screen border-2 rounded-md border-pink-500">
          <img src="assets/euLiteralmente.jpg" className="w-full max-h-96 object-cover rounded-t-md" />

          <div className="flex flex-col items-center justify-center p-1.5 ">
            <div className="dark:bg-slate-200 bg-slate-800 dark:text-stone-800 text-white rounded-b-md p-5 h-fit w-full ">
              ~👾 Sou um estudante, desenvolvedor e apaixonado por tecnologia.
              Comecei a programar com meus 13 anos, experimentando com Python e
              jogos em CLI, ao passar dos anos percebi que isso era minha
              paixão, e desde então venho sempre trazendo minhas idéias à vida
              usando Software e Hardware!
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:w-1/2 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
