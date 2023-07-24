import React from "react";
import Intro from "./Intro";


function Console() {
  return (
    
    <div className="p-3">
      <div className="dark:bg-slate-300 w-100 box-border h-7 bg-slate-200 mx-0 my-auto rounded-t-md">
        <div className="h-2.5 w-2.5 rounded-full relative top-1 left-2 bg-red-600 inline-block hover:scale-110"></div>
        <div className="h-2.5 w-2.5 rounded-full relative top-1 left-3 bg-yellow-300 inline-block hover:scale-110"></div>
        <div className="h-2.5 w-2.5 rounded-full relative top-1 left-4 bg-green-600 inline-block hover:scale-110"></div>
      </div>
      <div className="dark:bg-slate-900 bg-slate-300 box-border w-100 mx-0 my-auto p-5 rounded-b-md">
        <Intro />
      </div>
    </div>
    
  );
}

export default Console;
