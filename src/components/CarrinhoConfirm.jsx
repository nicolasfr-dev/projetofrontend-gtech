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
    const total = calcularTotal();
    reset();
    navigate("/carrinho/sucess", {
      state: { ...data, carrinho, total },
    });
  };

  return (
    <form onSubmit={handleSubmit(handleFinalSubmit)}>
      <div className="w-full max-w-5xl mx-auto flex flex-col bg-light-gray-3 justify-center pt-8 px-4 sm:px-8 space-y-7">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-dark-gray font-bold">
          Finalizar Compra
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-5">
          {/* COLUNA PRINCIPAL */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {/* Informações Pessoais */}
            <div className="flex flex-col p-8 bg-white rounded-sm">
              <h2 className="text-sm text-dark-gray-2 font-bold border-b border-light-gray-2 pb-4 mb-4">
                Informações Pessoais
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  { id: "nome", label: "Nome Completo *", type: "text", placeholder: "Insira seu nome" },
                  { id: "cpf", label: "CPF *", type: "number", placeholder: "Insira seu CPF" },
                  { id: "email", label: "E-mail *", type: "email", placeholder: "Insira seu e-mail" },
                  { id: "telefone", label: "Celular *", type: "tel", placeholder: "Insira seu celular" },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="text-xs text-dark-gray-2 font-bold">
                      {field.label}
                    </label>
                    <input
                      {...register(field.id)}
                      id={field.id}
                      className="block w-full h-15 p-3 text-md rounded-lg bg-white border border-light-gray-2 mt-2 font-normal text-lg"
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Informações de Entrega */}
            <div className="flex flex-col p-8 bg-white rounded-sm">
              <h2 className="text-sm text-dark-gray-2 font-bold border-b border-light-gray-2 pb-4 mb-4">
                Informações de Entrega
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  { id: "endereco", label: "Endereço *", placeholder: "Insira seu endereço" },
                  { id: "bairro", label: "Bairro *", placeholder: "Insira seu bairro" },
                  { id: "cidade", label: "Cidade *", placeholder: "Insira sua cidade" },
                  { id: "cep", label: "CEP *", type: "number", placeholder: "Insira seu CEP" },
                  { id: "complemento", label: "Complemento", placeholder: "Insira seu complemento" },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="text-xs text-dark-gray-2 font-bold">
                      {field.label}
                    </label>
                    <input
                      {...register(field.id)}
                      id={field.id}
                      className="block w-full h-15 p-3 text-md rounded-lg bg-white border border-light-gray-2 mt-2 font-normal text-lg"
                      type={field.type || "text"}
                      placeholder={field.placeholder}
                      required={field.label.includes("*")}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Informações de Pagamento */}
            <div className="flex flex-col p-8 bg-white rounded-sm">
              <h2 className="text-sm text-dark-gray-2 font-bold mb-4">Informações de Pagamento</h2>
              <hr className="border-light-gray-2 mb-4" />

              <div className="flex flex-col gap-4">
                <div>
                  <h6 className="text-xs text-dark-gray-2 font-bold mb-4">Forma de Pagamento</h6>
                  <fieldset className="flex flex-row gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        {...register("formaPagamento")}
                        type="radio"
                        id="credito"
                        value="credito"
                        defaultChecked
                      />
                      Cartão de Crédito
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        {...register("formaPagamento")}
                        type="radio"
                        id="boleto"
                        value="boleto"
                      />
                      Boleto Bancário
                    </label>
                  </fieldset>
                </div>
                <div>
                  <label className="text-xs text-dark-gray-2 font-bold">
                    Nome do Cartão *
                    <input
                      {...register("nomeCartao")}
                      className="block w-full h-15 p-3 text-md rounded-lg bg-white border border-light-gray-2 mt-2 font-normal text-lg"
                      type="text"
                      placeholder="Insira o nome do Cartão"
                      required
                    />
                  </label>
                </div>
                <div className="flex flex-col lg:flex-row gap-2">
                  <div className="flex-1">
                    <label className="text-xs text-dark-gray-2 font-bold">
                      Número do Cartão *
                      <input
                        {...register("numeroCartao")}
                        className="block w-full h-15 p-3 text-md rounded-lg bg-white border border-light-gray-2 mt-2 font-normal text-lg"
                        type="text"
                        placeholder="Insira o número do Cartão"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex-1">
                    <label className="text-xs text-dark-gray-2 font-bold">
                      Validade do Cartão *
                      <input
                        {...register("validadeCartao")}
                        className="block w-full h-15 p-3 text-md rounded-lg bg-white border border-light-gray-2 mt-2 font-normal text-lg"
                        type="month"
                        required
                      />
                    </label>
                  </div>
                </div>
                <div className="lg:w-2/4">
                  <label className="text-xs text-dark-gray-2 font-bold">
                    CVV *
                    <input
                      {...register("cvv")}
                      className="block w-full h-15 p-3 text-md rounded-lg bg-white border border-light-gray-2 mt-2 font-normal text-lg"
                      type="number"
                      placeholder="CVV"
                      required
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Finalizar Compra (desktop) */}
            <div className="hidden lg:flex flex-col p-8 bg-white rounded-sm">
              <h2 className="text-sm text-dark-gray-2 font-bold mb-4">Finalizar Compra</h2>
              <hr className="border-light-gray-2 mb-4" />
              <div className="text-end mb-4">
                <div className="flex justify-between">
                  <span className="text-dark-gray text-lg font-bold">Total:</span>
                  <span className="text-error font-bold text-lg">
                    R$ {calcularTotal().toFixed(2)}
                  </span>
                </div>
                <span className="text-light-gray text-xs">
                  ou 10x de R$ {(calcularTotal() / 10).toFixed(2)}
                </span>
              </div>
              <button
                className="bg-warning font-bold rounded-lg text-white w-full h-13"
                type="submit"
              >
                Realizar Pagamento
              </button>
            </div>
          </div>

          {/* COLUNA RESUMO */}
          <div className="flex flex-col px-8 py-7 bg-white rounded-sm">
            <h2 className="text-lg text-dark-gray-2 font-bold mb-4">RESUMO</h2>
            <hr className="border-light-gray-2 mb-4" />
            <div className="flex flex-col gap-4">
              {carrinho.map((produto) => (
                <div key={produto.sku} className="flex items-center space-x-4">
                  <img
                    className="w-20 h-14 object-contain rounded-sm bg-[#E2E3FF]"
                    src={produto.image || "/default-image.png"}
                    alt={produto.name || "Produto"}
                  />
                  <div className="flex-1">
                    <p className="text-sm text-dark-gray font-bold">{produto.name}</p>
                    <p className="text-xs text-light-gray">
                      {produto.qty} un • R$ {garantirNumero(produto.price).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
              <hr className="border-light-gray-2" />
              <div className="flex justify-between text-sm">
                <span className="text-light-gray">Subtotal:</span>
                <span>R$ {calcularSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-light-gray">Frete:</span>
                <span>R$ {calcularFrete().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-light-gray">Desconto:</span>
                <span>R$ {calcularDesconto().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>R$ {calcularTotal().toFixed(2)}</span>
              </div>
              <button
                className="mt-4 bg-warning font-bold rounded-lg text-white w-full h-13"
                type="submit"
              >
                Realizar Pagamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CarrinhoConfirm;
