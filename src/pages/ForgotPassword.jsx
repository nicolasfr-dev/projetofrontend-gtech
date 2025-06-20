import Gmail from "../assets/gmail.svg";
import Facebook2 from "../assets/facebook-2.svg";

const ForgotPassword = () => {
  return (
    <>
      <main className="flex w-dvw h-200 px-75 justify-around bg-linear-to-t from-[#EFEFFF] to-secondary">
        <div className=" bg-white p-8 rounded-sm w-2/5 self-center">
          <form className="w-full">
            <h2 className="font-bold text-4xl text-dark-gray">
              Troque sua senha
            </h2>

            <h3 className="py-5 text-dark-gray-2">
              Lembrou da senha? Então entre <a className="underline" href="/user/login"> aqui.</a>
            </h3>

            <p className="mb-5 text-sm text-dark-gray">
                Você receberá um email com um link para que você possa redefinir sua senha.
            </p>

            <label
              className="block w-full font-bold text-dark-gray-2 text-xs mb-5"
              htmlFor="register"
            >
              Email *
              <input
                className="block w-full h-15 p-3 text-md bg-light-gray-3 mt-2"
                type="email"
                name="email"
                id="register"
                required
              />
            </label>

            <button className="bg-primary hover:bg-tertiary w-full font-bold h-12 text-sm rounded-lg mb-3 text-white cursor-pointer">
              Enviar Email
            </button>
          </form>
        </div>

        <img src="/login-shoes.png" className="w-1/2 h-full" />
      </main>
    </>
  );
};

export default ForgotPassword;
