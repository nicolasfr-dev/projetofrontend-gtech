const Collections = ({ off, img, className = "" }) => {
  return (
    <>
      <figure
        className={`relative flex flex-col justify-between p-2 rounded-lg bg-light-blue-100 ${className}`}
      >
        <span className="absolute text-xs sm:text-sm font-bold z-10 top-4 sm:top-5 left-4 sm:left-5 py-0.5 sm:py-1 px-2 sm:px-3 rounded-2xl bg-off text-dark-gray-2">
          {off}% OFF
        </span>
        <div className="rounded-lg w-full object-contain overflow-hidden">
          <img
            className="rounded-lg w-full object-contain hover:scale-105 transition-transform duration-300"
            src={img}
            alt=""
          />
        </div>
        <button className="absolute left-4 sm:left-5 bottom-4 sm:bottom-6 bg-white w-32 sm:w-42 h-10 sm:h-12 rounded-lg font-bold text-primary text-sm sm:text-base cursor-pointer hover:bg-secondary hover:text-white transition-colors duration-300">
          Comprar
        </button>
      </figure>
    </>
  );
};

export default Collections;
