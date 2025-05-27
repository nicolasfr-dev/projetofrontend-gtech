import Section from "../components/Section";
import Collections from "../components/Collections";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="px-22 pt-7 pb-5">
        <Section
          title="Coleções em destaque"
          link={<Link to="/produtos">Ver tudo</Link>}
          content={<section className="flex max-w-full gap-2">
              <Collections className="grow" off="30" img="public/collection-1.png" />
              <Collections className="grow" off="30" img="public/collection-2.png" />
              <Collections className="grow" off="30" img="public/collection-3.png" />

          </section>}
        />

        <img src="" alt="" />
      </div>
    </>
  );
};

export default HomePage;
