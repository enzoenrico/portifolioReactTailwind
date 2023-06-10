function Hobbies({ hobbie, desc, imgUrl }) {
  return (
    <>
    <div className="p-3 my-2">
      <div className="dark:bg-slate-300 box-border md:h-7 bg-slate-200 mx-0 my-auto rounded-t-md">
        <div className="h-2.5 w-2.5 rounded-full relative top-1 left-2 bg-red-600 inline-block"></div>
        <div className="h-2.5 w-2.5 rounded-full relative top-1 left-3 bg-yellow-300 inline-block"></div>
        <div className="h-2.5 w-2.5 rounded-full relative top-1 left-4 bg-green-600 inline-block"></div>
      </div>
      <div className="dark:bg-slate-900 bg-slate-300 box-border w-auto h-full my-auto p-5 rounded-b-md">
        <div className="font-semibold text-md md:text-xl text-center max-w-lg">
          {hobbie}
        </div>
        <div className="text-sm md:text-lg text-center max-w-lg">
          {desc}
        </div>
      </div>
    </div>
    </>
  );
}

export default Hobbies;
