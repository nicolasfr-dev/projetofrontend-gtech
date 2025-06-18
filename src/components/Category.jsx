const Category = ({ image, hover, title }) => {
  return (
    <div className="flex flex-col items-center group cursor-pointer">
      <div className="relative flex justify-center items-center rounded-full w-[140px] h-[140px] bg-white overflow-hidden">
        <img
          src={image}
          alt={title}
          className="scale-125 transition-opacity duration-300 opacity-100 group-hover:opacity-0 group-hover:scale-[1.35]"
        />
        <img
          src={hover}
          alt={title}
          className="scale-125 transition-opacity duration-300 opacity-0 group-hover:opacity-100 absolute group-hover:scale-[1.35]"
        />
      </div>

      <h4 className="mt-5 text-dark-gray-2 font-bold group-hover:text-primary transition-colors duration-300">
        {title}
      </h4>
    </div>
  );
};

export default Category;