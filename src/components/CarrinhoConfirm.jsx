import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCarrinho } from "../data/context/CarrinhoContext.jsx";

const CarrinhoConfirm = ({ onSubmit }) => {
  const { carrinho } = useCarrinho();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const garantirNumero = (valor) =>
    isNaN(valor) || valor == null ? 0 : parseFloat(valor);
  const calcularSubtotal = () =>
    carrinho.reduce(
      (acc, produto) => acc + garantirNumero(produto.price) * produto.qty,
      0
    );
  const calcularDesconto = () => 0.0;
  const calcularFrete = () => 0.0;
  const calcularTotal = () =>
    calcularSubtotal() - calcularDesconto() + calcularFrete();

  const handleFinalSubmit = (data) => {
    const total = carrinho.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
    reset();
    navigate("/carrinho/sucess", {
      state: { ...data, carrinho, total },
    });
  };

  return (
    <form onSubmit={handleSubmit(handleFinalSubmit)}>
      <div className="flex flex-col bg-light-gray-3 justify-center pt-8 px-4 sm:px-8 space-y-7">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-dark-gray font-bold">
          Finalizar Compra
        </h1>
        <div className="flex flex-col lg:flex-row flex-1 gap-4 mb-5">
          <div className="flex flex-col gap-2 w-full lg:w-3/4">
            <div className="flex flex-col p-8 bg-white rounded-sm">
              <h2 className="text-sm text-dark-gray-2 font-bold border-b-1 border-light-gray-2 pb-4 mb-4">
                Informações Pessoais
              </h2>
              <div className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="nome"
                    className="text-xs text-dark-gray-2 font-bold"
                  >
                    Nome Completo *
                  </label>
                  <input
                    {...register("nome")}
                    id="nome"
                    className="block w-full h-15 p-3 text-md rounded-lg bg-light-gray-3 mt-2 font-normal text-lg"
                    type="text"
                    placeholder="Insira seu nome"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="cpf"
                    className="text-xs text-dark-gray-2 font-bold"
                  >
                    CPF *
                  </label>
                  <input
                    {...register("cpf")}
                    id="cpf"
                    className="block w-full h-15 p-3 text-md rounded-lg bg-light-gray-3 mt-2 font-normal text-lg"
                    type="number"
                    placeholder="Insira seu CPF"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs text-dark-gray-2 font-bold"
                  >
                    E-mail *
                  </label>
                  <input
                    {...register("email")}
                    id="email"
                    className="block w-full h-15 p-3 text-md rounded-lg bg-light-gray-3 mt-2 font-normal text-lg"
                    type="email"
                    placeholder="Insira seu e-mail"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="telefone"
                    className="text-xs text-dark-gray-2 font-bold"
                  >
                    Celular *
                  </label>
                  <input
                    {...register("telefone")}
                    id="telefone"
                    className="block w-full h-15 p-3 text-md rounded-lg bg-light-gray-3 mt-2 font-normal text-lg"
                    type="tel"
                    placeholder="Insira seu celular"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col p-8 bg-white rounded-sm">
              <h2 className="text-sm text-dark-gray-2 font-bold border-b-1 border-light-gray-2 pb-4 mb-4">
                Informações de Entrega
              </h2>
              <div className="flex flex-col gap-4">
                <label
                  className="block w-full font-bold text-dark-gray-2 text-xs mb-2"
                  htmlFor="endereco"
                >
                  Endereço *
                  <input
                    {...register("endereco")}
                    id="endereco"
                    className="block w-full h-15 p-3 text-md rounded-lg bg-light-gray-3 mt-2 font-normal text-lg"
                    type="text"
                    placeholder="Insira seu endereço"
                    required
                  />
                </label>
                <label
                  className="block w-full font-bold text-dark-gray-2 text-xs mb-2"
                  htmlFor="bairro"
                >
                  Bairro *
                  <input
                    {...register("bairro")}
                    id="bairro"
                    className="block w-full h-15 p-3 text-md rounded-lg bg-light-gray-3 mt-2 font-normal text-lg"
                    type="text"
                    placeholder="Insira seu bairro"
                    required
                  />
                </label>
                <label
                  className="block w-full font-bold text-dark-gray-2 text-xs mb-2"
                  htmlFor="cidade"
                >
                  Cidade *
                  <input
                    {...register("cidade")}
                    id="cidade"
                    className="block w-full h-15 p-3 text-md rounded-lg bg-light-gray-3 mt-2 font-normal text-lg"
                    type="text"
                    placeholder="Insira sua cidade"
                    required
                  />
                </label>
                <label
                  className="block w-full font-bold text-dark-gray-2 text-xs mb-2"
                  htmlFor="cep"
                >
                  CEP *
                  <input
                    {...register("cep")}
                    id="cep"
                    className="block w-full h-15 p-3 text-md rounded-lg bg-light-gray-3 mt-2 font-normal text-lg"
                    type="number"
                    placeholder="Insira seu CEP"
                    required
                  />
                </label>
                <label
                  className="block w-full font-bold text-dark-gray-2 text-xs mb-2"
                  htmlFor="complemento"
                >
                  Complemento
                  <input
                    {...register("complemento")}
                    id="complemento"
                    className="block w-full h-15 p-3 text-md rounded-lg bg-light-gray-3 mt-2 font-normal text-lg"
                    type="text"
                    placeholder="Insira seu complemento"
                  />
                </label>
              </div>
            </div>

            {/* Mantenha as demais seções de pagamento e resumo */}
            {/* ... */}
          </div>

          {/* Coluna do resumo mantida igual */}
          {/* ... */}
        </div>
      </div>
    </form>
  );
};

export default CarrinhoConfirm;
