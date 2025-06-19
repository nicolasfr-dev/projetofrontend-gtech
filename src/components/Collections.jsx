const Collections = ({ off, img, className = "" }) => {
  return (
    <>
      <figure
        className={`relative flex flex-col justify-between p-2 rounded-lg bg-light-blue-100 ${className}`}
      >
        <span className="absolute text-sm font-bold z-10 top-5 left-5 py-1 px-3 rounded-2xl bg-off text-dark-gray-2">
          {off}% OFF
        </span>
        <div className="rounded-lg w-full object-contain overflow-hidden">
          <img
            className="rounded-lg w-full object-contain hover:scale-105"
            src={img}
            alt=""
          />
        </div>
        <button className="absolute left-5 bottom-15 bg-white w-42 h-12 rounded-lg font-bold text-primary cursor-pointer hover:bg-secondary hover:text-white">
          Comprar
        </button>
      </figure>
    </>
  );
};

export default Collections;
