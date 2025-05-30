import Section from "../components/Section";
import Collections from "../components/Collections";
import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";
import ArrowRight2 from "../assets/arrow-right-2.svg";

const HomePage = () => {
  return (
    <>
        <Gallery />
      <div className="px-22 pt-7 pb-5">
        
        <Section
          title="Coleções em destaque"
          content={
            <section className="grid grid-cols-1 md:grid-cols-3 w-full">
              <Collections
                className="flex-1"
                off="30"
                img="/collection-1.png"
              />
              <Collections
                className="flex-1"
                off="30"
                img="/collection-2.png"
              />
              <Collections
                className="flex-1"
                off="30"
                img="/collection-3.png"
              />
            </section>
          }
        />

        <Section
              title='Produtos em alta'
              link={<Link className="flex gap-2" to="/produtos">Ver tudo <img className="w-5" src={ArrowRight2} alt="" /></Link>}
            content={''}
              />
      </div>
    </>
  );
};

export default HomePage;
