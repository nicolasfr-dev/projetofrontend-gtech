import Gmail from "../assets/gmail.svg";
import Facebook2 from "../assets/facebook-2.svg";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <main className="flex flex-col items-center lg:flex-row w-full min-h-screen sm:px-8 md:px-12 lg:px-75 lg:pt-0 p-4 bg-gradient-to-t from-[#EFEFFF] to-secondary">
        <div className=" bg-white p-8 rounded-sm w-full lg:w-2/5 self-center">
          <form className="w-full">
            <h2 className="font-bold text-4xl text-dark-gray">
              Acesse sua conta
            </h2>
            <h3 className="py-5">
              Novo cliente? Então registre-se{" "}
              <Link to="/user/cadastro" className="underline">
                {" "}
                aqui.
              </Link>
            </h3>
            <label
              className="block w-full font-bold text-dark-gray-2 text-xs mb-5"
              htmlFor="login"
            >
              Login *
              <input
                className="block w-full h-15 p-3 text-md bg-light-gray-3 mt-2"
                type="text"
                name="login"
                id="login"
                required
              />
            </label>

            <label
              className="block w-full font-bold text-dark-gray-2 text-xs mb-5"
              htmlFor="Password"
            >
              Senha *
              <input
                className="block w-full h-15 p-3 text-md bg-light-gray-3 mt-2"
                type="password"
                name="password"
                id="password"
                required
              />
            </label>

            <h3 className="py-5">
              <Link to="/user/resgatarsenha">Esqueci minha senha</Link>
            </h3>

            <button className="bg-primary hover:bg-tertiary w-full font-bold h-12 text-sm rounded-lg mb-3 text-white cursor-pointer">
              Acessar Conta
            </button>

            <h4 className="text-center justify-self-center flex flex-row gap-5 mt-5">
              Ou faça login com <img src={Gmail} /> <img src={Facebook2} />
            </h4>
          </form>
        </div>

        <img
          src="/login-shoes.png"
          className="w-1/2 h-full invisible lg:visible"
        />
      </main>
    </>
  );
};

export default LoginPage;
