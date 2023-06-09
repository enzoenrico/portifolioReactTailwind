function Hobbies({ hobbie, desc, imgUrl }) {
  return (
    <>
      <img src={imgUrl} alt="hobbie" className="w-full h-30 object-cover" />

      <div className="w-full p-4">
        <h3 className="text-lg md:text-lg mb-2 md:mb-3 font-semibold text-center">
            {hobbie}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-sm">
            {desc}
        </p>
      </div>
    </>
  );
}

export default Hobbies;
