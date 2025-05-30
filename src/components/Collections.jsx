const Collections = ({off, img, className = ''}) => {
  return (
    <>
      <figure className={`relative flex flex-col justify-between p-2 rounded-lg bg-light-blue-100 ${className}`}>
        <span className="absolute text-sm font-bold left-13 top-10 py-1 px-3 rounded-2xl bg-off text-dark-gray-2">
          {off}% OFF
        </span>
        <img className="rounded-lg w-full object-cover" src={img} alt="" />
        <button className="absolute left-13 bottom-15 bg-white w-42 h-12 rounded-lg font-bold text-primary cursor-pointer hover:bg-secondary hover:text-white">
          Comprar
        </button>
      </figure>
    </>
  );
};

export default Collections;
