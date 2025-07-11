import Logo from "../assets/logo-footer.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark-gray text-white pt-10 px-4 sm:px-8 md:px-12 lg:px-20 pb-10 w-full">
        <section className="flex flex-col md:flex-row flex-wrap gap-8 border-b-2 border-dark-gray-2">
          <div className="w-full md:w-1/2 lg:w-1/4">
            <img className="pb-5 mr-10" src={Logo} alt="" />
            <p className="text-white text-base font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>

            <div className="inline-flex gap-3 mt-10">
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
              <img src={Twitter} alt="" />
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4">
            <h5 className="font-semibold">Informação</h5>
            <ul className="my-8 font-light space-y-5">
              <li>Sobre Drip Store</li>
              <li>Segurança</li>
              <li>Wishlist</li>
              <li>Blog</li>
              <li>Trabalhe conosco</li>
              <li>Meus pedidos</li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4">
            <h5 className="font-semibold">Categorias</h5>
            <Link to={"/produtos"}>
              <ul className="my-8 font-light space-y-5">
                <li>Camisetas</li>
                <li>Calças</li>
                <li>Bonés</li>
                <li>Headphones</li>
                <li>Tênis</li>
              </ul>
            </Link>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4">
            <h5 className="font-semibold">Contato</h5>
            <ul className="my-8 font-light space-y-5">
              <li>
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                60150-161
              </li>
              <li>(85) 3051-3411</li>
            </ul>
          </div>
        </section>
        <span className="mt-6 md:mt-10 text-xs block text-center font-light">
          @ 2022 Digital College
        </span>
      </footer>
    </>
  );
};

export default Footer;
