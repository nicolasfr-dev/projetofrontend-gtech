import Logo from "../assets/logo-footer.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark-gray text-white p-15 pb-10 w-full ">
        <section className="gap-30 flex border-b-2 border-dark-gray-2">
          <div className="w-full">
              <img className="pb-5" src={Logo} alt="" />
            <p className="text-white text-base font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium cumque voluptate quod eum et atque impedit beatae
              perspiciatis officia, alias odit fuga magni eveniet obcaecati enim
              sapiente? Aspernatur, nisi porro.
            </p>

            <div className="inline-flex gap-3 mt-10">
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
              <img src={Twitter} alt="" />
            </div>
          </div>

          <div className="ml-30 w-full">
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

          <div className="w-full">
              <h5 className="font-semibold">Categorias</h5>
            <ul className="my-8 font-light space-y-5">
              <li>Camisetas</li>
              <li>Calças</li>
              <li>Bonés</li>
              <li>Headphones</li>
              <li>Tênis</li>
            </ul>
          </div>

          <div className="w-full">
              <h5 className="font-semibold">Contato</h5>
            <ul className="my-8 font-light space-y-5">
              <li>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</li>
              <li>(85) 3051-3411</li>
            </ul>
          </div>
        </section>
        <span className="mt-10 text-xs block text-center font-light">@ 2022 Digital College</span>
      </footer>
    </>
  );
};

export default Footer;
