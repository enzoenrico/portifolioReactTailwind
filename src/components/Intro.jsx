import React from "react";


function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      {/* Add hover pra highlight só do @dev */}
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold hover:text-pink-500 transition-colors duration-300">
        enzo@dev
      </h1>

      <p className="text-base md:text-x1 mb-3 font-medium">
        $~ Engenheiro de Software & Desenvolvedor Web
      </p>
      <p className="text-small mw-w-1 mb-6 font-bold bg-slate-200 text-stone-800 rounded-md p-4 md:m-2 sm: m-2">
        ~👾 Sou um desenvolvedor full-stack, estudante e entusiasta de
        tecnologia. Atualmente cursando Engenharia de Software e estagiando{" "}
        <a className="text-blue-600 hover:text-blue-900 hover:underline decoration-2 transition-colors duration-300 hover:cursor-pointer">
          @AkerSolutions
        </a>
      </p>
    </div>
  );
}

export default Intro;
