import { Link } from "react-router-dom";

const Section = ({ title, pos = "start", link, content }) => {
  const isCentered = pos === "center";
  const textAlignClass = isCentered ? "text-center" : "text-left";

  return (
    <section className="mb-20">
      {(title || link) && (
        <div
          className={`flex items-center mb-2 ${
            isCentered ? "justify-center" : "justify-between"
          }`}
        >
          {title && (
            <h3 className={`text-2xl text-dark-gray-2 font-bold ${textAlignClass}`}>
              {title}
            </h3>
          )}

          {!isCentered && link && (
            <div className="ml-4 text-primary">
              {typeof link === "string" ? (
                <Link to={link}>Ver mais</Link>
              ) : (
                link
              )}
            </div>
          )}
        </div>
      )}

      {content}
    </section>
  );
};

export default Section;
