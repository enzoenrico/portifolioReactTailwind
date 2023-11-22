function Hobbies({ hobbie, desc, imgUrl }) {
  return (
    <>
      <div className="p-3 my-2 max-w-xl">
        <div className=" border-pink-500 border-2 border-b-0 bg-transparent w-100 box-border h-7  mx-0 my-auto rounded-t-md">
          <div className="h-2.5 w-2.5 rounded-full relative top-1 left-2 bg-red-600 inline-block hover:scale-125"></div>
          <div className="h-2.5 w-2.5 rounded-full relative top-1 left-3 bg-yellow-300 inline-block hover:scale-125"></div>
          <div className="h-2.5 w-2.5 rounded-full relative top-1 left-4 bg-green-600 inline-block hover:scale-125"></div>
        </div>
        <div className="border-pink-500 border-2 border-t-0 bg-transparent box-border w-100 h-56 mx-0 my-auto p-5 rounded-b-md flex justify-center items-center flex-col">  
          <div className="font-semibold text-md md:text-xl text-center max-w-lg">
            {hobbie}
          </div>
          <div className="text-sm md:text-lg text-center max-w-lg ">{desc}</div>
        </div>
      </div>
    </>
  );
}

export default Hobbies;
