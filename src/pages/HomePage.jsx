import Section from "../components/Section";
import Collections from "../components/Collections";
import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";
import ArrowRight2 from "../assets/arrow-right-2.svg";
import Category from "../components/Category";
import Camisetas from "../assets/camisetas.svg";
import Calcas from "../assets/calcas.svg";
import Headphones from "../assets/headphones.svg";
import Bone from "../assets/bone.svg";
import Tenis from "../assets/tenis.svg";
import ProductCard from "../components/ProductCard";
import ProductListing from "../components/ProductListing";

const HomePage = () => {
  return (
    <>
      <Gallery />
      <main className="px-75 pt-7 bg-light-gray-3 pb-5">
        <Section
          title="Coleções em destaque"
          pos="start"
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
          title="Coleções em destaque"
          pos="center"
          content={
            <section className="flex justify-center gap-10">
              <Category image={Camisetas} title={"Camisetas"} />
              <Category image={Calcas} title={"Calça"} />
              <Category image={Bone} title={"Boné"} />
              <Category image={Headphones} title={"Headphones"} />
              <Category image={Tenis} title={"Tênis"} />
            </section>
          }
        />

        <Section
          title="Produtos em alta"
          link={
            <Link className="flex gap-2" to="/produtos">
              Ver tudo <img className="w-5" src={ArrowRight2} alt="" />
            </Link>
          }
          content={
            <ProductListing
              products={
                <section className="grid grid-cols-4 grid-rows-2 gap-x-10 gap-y-10 justify-items-center items-center w-full">
                  <ProductCard
                    image={"/white-sneakers.png"}
                    category={"Tênis"}
                    title={"Tênis Nike Air Force 1'07 Masculino White & Red"}
                    off={30}
                    price={700}
                  />
                  <ProductCard
                    image={"/k-swiss.png"}
                    category={"Tênis"}
                    title={"K-Swiss V8 - Masculino"}
                    off={50}
                    price={200}
                  />
                  <ProductCard
                    image={"/k-swiss.png"}
                    category={"Tênis"}
                    title={"K-Swiss V8 - Masculino"}
                    price={200}
                  />
                  <ProductCard
                    image={"/k-swiss.png"}
                    category={"Tênis"}
                    title={"K-Swiss V8 - Masculino"}
                    price={200}
                  />
                  <ProductCard
                    image={"/k-swiss.png"}
                    category={"Tênis"}
                    title={"K-Swiss V8 - Masculino"}
                    price={200}
                  />
                  <ProductCard
                    image={"/k-swiss.png"}
                    category={"Tênis"}
                    title={"K-Swiss V8 - Masculino"}
                    price={200}
                  />
                  <ProductCard
                    image={"/k-swiss.png"}
                    category={"Tênis"}
                    title={"K-Swiss V8 - Masculino"}
                    price={200}
                  />
                  <ProductCard
                    image={"/k-swiss.png"}
                    category={"Tênis"}
                    title={"K-Swiss V8 - Masculino"}
                    price={200}
                  />
                </section>
              }
            />
          }
        />
      </main>
      <section className="w-full h-full pt-30 flex px-75 space-x-20 py-10 bg-white">
        <figure className="w-1/2">
          <div className="w-150 h-150 bg-secondary relative  justify-items-center bg-gradient-to-t from-white from-50% to-170%  content-center rounded-full">
            <img className="z-10 top-27 scale-125 absolute" src="/air-jordan.png" alt="" />
          </div>
        </figure>
        <div className="w-1/2">
          <h5 className="font-bold text-primary mb-5">Oferta Especial</h5>
          <h3 className="text-5xl font-bold tracking-wider text-dark-gray-2">
            Air Jordan edição de colecionador
          </h3>
          <p className="text-dark-gray-2 my-10 tracking-wider font-normal text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          </p>
          <button className="bg-primary hover:bg-tertiary inline font-semibold w-60 h-10 text-sm rounded-lg text-white cursor-pointer">
            Ver oferta
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
