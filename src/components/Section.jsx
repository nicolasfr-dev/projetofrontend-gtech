
const Section = ({ title, link, content }) => {
  return (
    <>
      <section className="mb-20">
        <div className="flex justify-between">
          <h3 className=" text-2xl mb-2 text-dark-gray-2 font-bold">
            {title}
          </h3>
          <span className="text-primary items-center gap-2 inline-flex text-lg font-normal point cursor-pointer">
            {link}
          </span>
        </div>

        {content}

      </section>
    </>
  );
};

export default Section;
