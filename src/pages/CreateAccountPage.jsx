import { Link } from "react-router-dom";
import Gmail from "../assets/gmail.svg";
import Facebook2 from "../assets/facebook-2.svg";

const CreateAccountPage = () => {
  return (
    <main className="flex flex-col items-center lg:flex-row w-full min-h-screen sm:px-8 md:px-12 lg:px-75 lg:pt-0 p-4 bg-gradient-to-t from-[#EFEFFF] to-secondary">
      <div className="bg-white p-8 rounded-sm w-full lg:w-2/5 self-center">
        <form className="w-full">
          <h2 className="font-bold text-3xl md:text-4xl text-dark-gray">
            Crie sua conta
          </h2>
          <h3 className="py-5 text-sm md:text-base">
            Já possui uma conta? Então entre{" "}
            <Link className="underline" to="/user/login">
              aqui.
            </Link>
          </h3>

          <label
            className="block w-full font-bold text-dark-gray-2 text-xs mb-5"
            htmlFor="register"
          >
            Email *
            <input
              className="block w-full h-12 p-3 text-md bg-light-gray-3 mt-2 rounded"
              type="email"
              name="email"
              id="register"
            />
          </label>

          <Link to="/user/cadastro/form">
            <button
              className="bg-primary hover:bg-tertiary w-full font-bold h-12 text-sm rounded-lg mb-3 text-white cursor-pointer"
              type="button"
            >
              Criar Conta
            </button>
          </Link>

          <h4 className="text-center justify-self-center flex flex-row gap-5 mt-5">
            Ou faça login com <img src={Gmail} /> <img src={Facebook2} />
          </h4>
        </form>
      </div>

      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center items-center invisible lg:visible">
        <img
          src="/login-shoes.png"
          alt="Sapatos em exibição"
          className="w-full h-auto object-contain"
        />
      </div>
    </main>
  );
};

export default CreateAccountPage;
