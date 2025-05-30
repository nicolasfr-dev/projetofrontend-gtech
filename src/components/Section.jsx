import ArrowRight2 from "../assets/arrow-right-2.svg";

const Section = ({ title, link, content }) => {
  return (
    <>
      <section>
        <div className="flex justify-between">
          <h3 className=" text-2xl mb-2 text-dark-gray-2 font-bold">
            {title}
          </h3>
          <span className="text-primary items-center gap-2 inline-flex text-lg font-normal point cursor-pointer">
            {link} <img className="w-5" src={ArrowRight2} alt="" />
          </span>
        </div>
        {content}
      </section>
    </>
  );
};

export default Section;
