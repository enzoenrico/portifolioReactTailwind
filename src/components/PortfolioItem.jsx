
function PortfolioItem({ title, imgUrl, stack, link}) {
  return (
    <a href={link} className="min-w-project min-h-project border-2 border-pink-400 rounded-md items-center justify-center hover:border-pink-800 transition-colors duration-300  dark:hover:bg-stone-800">
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-48 object-cover cursor-pointer rounded-t-md opacity-80 hover:opacity-100 duration-700 transition bg-center"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold text-center">{title}</h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-sm">
          {stack.map(item => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-pink-600 rounded-md">
              {item}
            </span>
          ))}
      </p>

      </div>
    </a>
  );
}

export default PortfolioItem;
