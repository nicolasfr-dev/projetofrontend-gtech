import { Link } from "react-router-dom";
import Gmail from "../assets/gmail.svg";
import Facebook2 from "../assets/facebook-2.svg";

const ForgotPassword = () => {
  return (
    <main className="flex flex-col items-center lg:flex-row w-full min-h-screen sm:px-8 md:px-12 lg:px-75 lg:pt-0 p-4 bg-gradient-to-t from-[#EFEFFF] to-secondary">
      <div className="bg-white p-8 rounded-sm w-full lg:w-2/5 self-center">
        <form className="w-full">
          <h2 className="font-bold text-3xl md:text-4xl text-dark-gray">
            Troque sua senha
          </h2>

          <h3 className="py-5 text-dark-gray-2 text-sm md:text-base">
            Lembrou da senha? Então entre{" "}
            <Link className="underline" to="/user/login">
              aqui.
            </Link>
          </h3>

          <p className="mb-5 text-sm text-dark-gray">
            Você receberá um email com um link para redefinir sua senha.
          </p>

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
              required
            />
          </label>

          <button
            type="submit"
            className="bg-primary hover:bg-tertiary w-full font-bold h-12 text-sm rounded-lg mb-3 text-white cursor-pointer"
          >
            Enviar Email
          </button>
        </form>
      </div>

      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center items-center">
        <img
          src="/login-shoes.png"
          alt="Sapatos decorativos"
          className="w-full h-auto object-contain"
        />
      </div>
    </main>
  );
};

export default ForgotPassword;
