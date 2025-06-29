import { Link } from "react-router-dom";

const Category = ({ image, hover, title }) => {
  return (
    <>
      <Link to={"/produtos"}>
        <div className="flex flex-col items-center group cursor-pointer">
          <div className="relative flex justify-center items-center rounded-full w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] bg-white overflow-hidden">
            <img
              src={image}
              alt={title}
              className="scale-110 md:scale-125 transition-opacity duration-300 opacity-100 group-hover:opacity-0 group-hover:scale-[1.25]"
            />
            <img
              src={hover}
              alt={title}
              className="scale-110 md:scale-125 transition-opacity duration-300 opacity-100 group-hover:opacity-0 group-hover:scale-[1.25]"
            />
          </div>

          <h4 className="mt-3 md:mt-5 text-sm md:text-base text-dark-gray-2 font-bold group-hover:text-primary transition-colors duration-300">
            {title}
          </h4>
        </div>
      </Link>
    </>
  );
};

export default Category;
