const Collections = ({off, img}) => {
  return (
    <>
      <figure className="relative w-full flex grow">
        <span className="absolute text-sm font-bold left-8 top-5 py-1 px-3 rounded-2xl bg-off text-dark-gray-2">
          {off}% OFF
        </span>
        <img className="rounded-lg" src={img} alt="" />
        <button className="absolute left-8 bottom-15 bg-white w-40 h-10 rounded-lg text-primary cursor-pointer active:bg-primary active:text-white">
          Comprar
        </button>
      </figure>
    </>
  );
};

export default Collections;
