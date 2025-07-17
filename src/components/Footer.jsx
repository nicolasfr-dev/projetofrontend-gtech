import Logo from "../assets/logo-footer.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white pt-10 p-4 sm:px-8 md:px-12 lg:px-75 pb-10 w-full">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-b border-dark-gray-2 pb-8">
        <div>
          <img className="pb-5 mr-10" src={Logo} alt="Logo" />
          <p className="text-white text-base font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="inline-flex gap-3 mt-10">
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={Twitter} alt="Twitter" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-around gap-8">
          <div>
            <h5 className="font-semibold">Informação</h5>
            <ul className="my-8 font-light space-y-3">
              <li>Sobre Drip Store</li>
              <li>Segurança</li>
              <li>Wishlist</li>
              <li>Blog</li>
              <li>Trabalhe conosco</li>
              <li>Meus pedidos</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold">Categorias</h5>
            <ul className="my-8 font-light space-y-3">
              <li>Camisetas</li>
              <li>Calças</li>
              <li>Bonés</li>
              <li>Headphones</li>
              <li>Tênis</li>
            </ul>
          </div>
        </div>

        <div>
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
        © 2022 Digital College
      </span>
    </footer>
  );
};

export default Footer;