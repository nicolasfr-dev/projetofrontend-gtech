import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <main className="flex justify-center items-center w-full h-200 bg-linear-to-t from-[#EFEFFF] to-secondary">
        <div className=" text-center p-10 rounded-md bg-white w-1/4 h-130">
          <h1 className="text-9xl font-bold text-error">404</h1> 
          <h2 className="text-warning">⚠️ Erro: Página não encontrada</h2>

          <p className="text-dark-gray py-5 text-lg">A página que você está tentando acessar <strong>não existe</strong> ou <strong>está fora do ar.</strong></p>
          <Link to='/'>
          <button className="mt-25 bg-primary hover:bg-tertiary inline font-semibold w-60 h-18 text-lg rounded-lg text-white cursor-pointer">
            Voltar para página inicial
        </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
