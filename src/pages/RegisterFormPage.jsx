const RegisterFormPage = () => {
  return (
    <main className="bg-light-gray-3 px-4 sm:px-8 md:px-12 lg:px-20 py-6">
      <section className="max-w-2xl mx-auto">
        <h1 className="mb-6 mt-8 font-bold text-4xl">Criar Conta</h1>

        <div className="w-full rounded-sm bg-white p-5 mb-5">
          <h2 className="border-b text-dark-gray-2 font-bold border-light-gray-2 pb-5 my-2">
            Informações Pessoais
          </h2>

          <label htmlFor="nome" className="text-xs text-dark-gray-2 font-bold">
            Nome Completo *
            <input
              id="nome"
              className="block w-full h-12 p-3 text-md rounded-lg bg-light-gray-3 my-2 font-normal text-lg"
              type="text"
              placeholder="Insira seu nome"
              required
            />
          </label>

          <label htmlFor="cpf" className="text-xs text-dark-gray-2 font-bold">
            CPF *
            <input
              id="cpf"
              className="block w-full h-12 p-3 text-md rounded-lg bg-light-gray-3 my-2 font-normal text-lg"
              type="text"
              placeholder="Insira seu CPF"
              required
            />
          </label>

          <label htmlFor="email" className="text-xs text-dark-gray-2 font-bold">
            Email *
            <input
              id="email"
              className="block w-full h-12 p-3 text-md rounded-lg bg-light-gray-3 my-2 font-normal text-lg"
              type="email"
              placeholder="Insira seu email"
              required
            />
          </label>

          <label htmlFor="celular" className="text-xs text-dark-gray-2 font-bold">
            Celular *
            <input
              id="celular"
              className="block w-full h-12 p-3 text-md rounded-lg bg-light-gray-3 my-2 font-normal text-lg"
              type="text"
              placeholder="Insira seu celular"
              required
            />
          </label>
        </div>

        <div className="w-full rounded-sm bg-white p-5">
          <h2 className="border-b text-dark-gray-2 font-bold border-light-gray-2 pb-5 my-2">
            Informações de Entrega
          </h2>

          <label htmlFor="endereco" className="text-xs text-dark-gray-2 font-bold">
            Endereço *
            <input
              id="endereco"
              className="block w-full h-12 p-3 text-md rounded-lg bg-light-gray-3 my-2 font-normal text-lg"
              type="text"
              placeholder="Insira seu endereço"
              required
            />
          </label>

          <label htmlFor="bairro" className="text-xs text-dark-gray-2 font-bold">
            Bairro *
            <input
              id="bairro"
              className="block w-full h-12 p-3 text-md rounded-lg bg-light-gray-3 my-2 font-normal text-lg"
              type="text"
              placeholder="Insira seu bairro"
              required
            />
          </label>

          <label htmlFor="cidade" className="text-xs text-dark-gray-2 font-bold">
            Cidade *
            <input
              id="cidade"
              className="block w-full h-12 p-3 text-md rounded-lg bg-light-gray-3 my-2 font-normal text-lg"
              type="text"
              placeholder="Insira sua cidade"
              required
            />
          </label>

          <label htmlFor="cep" className="text-xs text-dark-gray-2 font-bold">
            CEP *
            <input
              id="cep"
              className="block w-full h-12 p-3 text-md rounded-lg bg-light-gray-3 my-2 font-normal text-lg"
              type="text"
              placeholder="Insira seu CEP"
              required
            />
          </label>

          <label htmlFor="complemento" className="text-xs text-dark-gray-2 font-bold">
            Complemento
            <input
              id="complemento"
              className="block w-full h-12 p-3 text-md rounded-lg bg-light-gray-3 my-2 font-normal text-lg"
              type="text"
              placeholder="Insira seu complemento"
            />
          </label>
        </div>

        <label className="my-8 flex items-start" htmlFor="ofertas">
          <input
            className="m-3 mt-1 w-5 h-5 accent-primary"
            type="checkbox"
            name="ofertas"
            id="ofertas"
          />
          <p className="text-sm">
            Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.
          </p>
        </label>

        <button className="bg-primary hover:bg-tertiary inline font-semibold w-full h-12 text-sm rounded-lg text-white cursor-pointer mb-10">
          Criar Conta
        </button>
      </section>
    </main>
  );
};

export default RegisterFormPage;
