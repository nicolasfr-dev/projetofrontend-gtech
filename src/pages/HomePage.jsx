import Section from "../components/Section";
import Collections from "../components/Collections";
import { Link } from "react-router-dom";
import Gallery from "../components/Gallery";
import ArrowRight2 from "../assets/arrow-right-2.svg";
import Category from "../components/Category";
import Camisetas from "../assets/camisetas.svg";
import CamisetasA from "../assets/camisetas-a.svg";
import Calcas from "../assets/calcas.svg";
import CalcasA from "../assets/calcas-a.svg"
import Headphones from "../assets/headphones.svg";
import HeadphonesA from "../assets/headphones-a.svg";
import Bone from "../assets/bone.svg";
import BoneA from "../assets/bone-a.svg";
import Tenis from "../assets/tenis.svg";
import TenisA from "../assets/tenis-a.svg";
import ProductListing from "../components/ProductListing";
import products from "../data/Products.jsx";

const HomePage = () => {
  return (
    <>
      <Gallery
        images={["/home-slide-1.jpeg","/home-slide-2.jpeg","/home-slide-3.jpeg","/home-slide-4.jpeg","/home-slide-5.jpeg","/home-slide-6.jpeg","/home-slide-7.jpeg","/home-slide-8.jpeg"]}
      />
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
              <Category image={Camisetas} hover={CamisetasA} title={"Camisetas"} />
              <Category image={Calcas} hover={CalcasA} title={"Calça"} />
              <Category image={Bone} hover={BoneA} title={"Boné"} />
              <Category image={Headphones} hover={HeadphonesA} title={"Headphones"} />
              <Category image={Tenis} hover={TenisA} title={"Tênis"} />
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
          content={<ProductListing preset="4x2" products={products} />}
        />
      </main>

      <section className="w-full h-full pt-30 flex px-75 space-x-20 py-10 bg-white">
        <figure className="w-1/2">
          <div className="w-150 h-150 bg-secondary relative  justify-items-center bg-gradient-to-t from-white from-50% to-170%  content-center rounded-full">
            <img
              className="z-10 top-27 scale-125 absolute"
              src="/air-jordan.png"
              alt=""
            />
          </div>
        </figure>
        <div className="w-1/2">
          <h5 className="font-bold text-primary mb-5">Oferta Especial</h5>
          <h3 className="text-5xl font-bold tracking-wider text-dark-gray-2">
            Air Jordan edição de colecionador
          </h3>
          <p className="text-dark-gray-2 my-10 tracking-wider font-normal text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <Link to={'produto/1/AIR_JORDAN_CHICAGO'}>
            <button className="bg-primary hover:bg-tertiary inline font-semibold w-60 h-10 text-sm rounded-lg text-white cursor-pointer">
              Ver oferta
            </button>
          </Link>

        </div>
      </section>
    </>
  );
};

export default HomePage;
