import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      {/* Add hover pra highlight só do @dev */}
      <h1
        id="scrambled"
        className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold transition-colors duration-300 flex justify-center items-center"
      >
        <h1 className="text-6xl animate-bounce">👋</h1> {""} <p className="flex group cursor-default">enzo@<p className="group-hover:text-pink-500">dev</p></p>
      </h1>

      <p className="text-base md:text-x1 mb-3 font-medium">
        Software Engineer
      </p>
      <p className="text-small mw-w-1 mb-6 font-bold dark:bg-slate-200 bg-slate-800 dark:text-stone-800 text-white rounded-md p-4 md:m-2 sm: m-2 ">
        <text>~👾</text>Full-Stack developer, student, tech entusiast. Currently attending{" "}
        <a
          href="https://www.pucpr.br/cursos-graduacao/engenharia-de-software/"
          className="dark:text-blue-600 text-pink-500 hover:text-blue-900 hover:underline decoration-2 transition-colors duration-300 hover:cursor-pointer"
        >
          @PUCPR{" "}
        </a>
        for Software Engineering, and working{" "}
        <a
          href="https://www.onesubsea.com"
          className="dark:text-blue-600 text-pink-500 hover:text-blue-900 hover:underline decoration-2 transition-colors duration-300 hover:cursor-pointer"
        >
          @OneSubsea!
        </a>
        
      </p>
    </div>
  );
}

export default Intro;
