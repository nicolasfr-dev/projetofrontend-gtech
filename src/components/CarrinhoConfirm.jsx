import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCarrinho } from "../data/context/CarrinhoContext.jsx";

const CarrinhoConfirm = ({ onSubmit }) => {
  const { carrinho } = useCarrinho();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const garantirNumero = (valor) => isNaN(valor) || valor == null ? 0 : parseFloat(valor);
  const calcularSubtotal = () => carrinho.reduce((acc, produto) => acc + (garantirNumero(produto.price) * produto.qty), 0);
  const calcularDesconto = () => 0.00;
  const calcularFrete = () => 0.00;
  const calcularTotal = () => calcularSubtotal() - calcularDesconto() + calcularFrete();

   const handleFinalSubmit = (data) => {
    const total = carrinho.reduce((acc, item) => acc + item.price * item.qty, 0);
    reset();
    navigate("/carrinho/sucess", {
      state: { ...data, carrinho, total }
    });
  };

  return (
    <form onSubmit={handleSubmit(handleFinalSubmit)}>
      <div className="flex flex-col bg-light-gray-3 justify-center pt-8 px-4 sm:px-8 space-y-7">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-dark-gray font-bold">Finalizar Compra</h1>
        <div className="flex flex-col lg:flex-row flex-1 gap-4 mb-5">
          <div className="flex flex-col gap-2 w-3/4">
            <div className="flex flex-col gap-2 w-full lg:w-3/4">
              <h2 className="text-sm text-dark-gray-2 font-bold border-b-1 border-light-gray-2 pb-4 mb-4">Informações Pessoais</h2>
              <div className="flex flex-col gap-4">
                <div>
                  <label htmlFor="nome" className="text-xs text-dark-gray-2 font-bold">Nome Completo *</label>
                  <input {...register("nome")} id="nome" className="block w-full h-15 p-3 text-md rounded-lg bg-light-gray-3 mt-2 font-normal text-lg" type="text" placeholder="Insira seu nome" required />
                </div>
                <div>
                  <label htmlFor="cpf" className="text-xs text-dark-gray-2 font-bold">CPF *</label>
                  <input {...register("cpf")} id="cpf" className="block w-full h-15 p-3 text-md rounded-lg bg-light-gray-3 mt-2 font-normal text-lg" type="number" placeholder="Insira seu CPF" required />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs text-dark-gray-2 font-bold">E-mail *</label>
                  <input {...register("email")} id="email" className="block w-full h-15 p-3 text-md rounded-lg bg-light-gray-3 mt-2 font-normal text-lg" type="email" placeholder="Insira seu email" required />
                </div>
                <div>
                  <label htmlFor="telefone" className="text-xs text-dark-gray-2 font-bold">Celular *</label>
                  <input {...register("telefone")} id="telefone" className="block w-full h-15 p-3 text-md rounded-lg bg-light-gray-3 mt-2 font-normal text-lg" type="tel" placeholder="Insira seu celular" required />
                </div>
              </div>
            </div>

            <div className="flex flex-col p-8 bg-white rounded-sm">
              <h2 className="text-sm text-dark-gray-2 font-bold border-b-1 border-light-gray-2 pb-4 mb-4">Informações de Entrega</h2>
              <div className="flex flex-col gap-4">
                <label className="block w-full font-bold text-dark-gray-2 text-xs mb-5" htmlFor="endereco">
                  Endereço *
                  <input {...register("endereco")} id="endereco" className="block w-full h-15 p-3 text-md rounded-lg bg-light-gray-3 mt-2 font-normal text-lg" type="text" placeholder="Insira seu endereço" required />
                </label>
                <label className="block w-full font-bold text-dark-gray-2 text-xs mb-5" htmlFor="bairro">
                  Bairro *
                  <input {...register("bairro")} id="bairro" className="block w-full h-15 p-3 text-md rounded-lg bg-light-gray-3 mt-2 font-normal text-lg" type="text" placeholder="Insira seu bairro" required />
                </label>
                <label className="block w-full font-bold text-dark-gray-2 text-xs mb-5" htmlFor="cidade">
                  Cidade *
                  <input {...register("cidade")} id="cidade" className="block w-full h-15 p-3 text-md rounded-lg bg-light-gray-3 mt-2 font-normal text-lg" type="text" placeholder="Insira sua cidade" required />
                </label>
                <label className="block w-full font-bold text-dark-gray-2 text-xs mb-5" htmlFor="cep">
                  CEP *
                  <input {...register("cep")} id="cep" className="block w-full h-15 p-3 text-md rounded-lg bg-light-gray-3 mt-2 font-normal text-lg" type="number" placeholder="Insira seu CEP" required />
                </label>
                <label className="block w-full font-bold text-dark-gray-2 text-xs mb-5" htmlFor="complemento">
                  Complemento
                  <input {...register("complemento")} id="complemento" className="block w-full h-15 p-3 text-md rounded-lg bg-light-gray-3 mt-2 font-normal text-lg" type="text" placeholder="Insira seu complemento" />
                </label>
              </div>
            </div>

            <div className="flex flex-col p-8 bg-white rounded-sm">
              <div className="flex flex-col space-y-5 pb-5">
                <p className="text-sm text-dark-gray-2 font-bold">Informações de Pagamento</p>
                <hr className=" border-light-gray-2" />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <h6 className="text-xs text-dark-gray-2 font-bold mb-4">Forma de Pagamento</h6>
                  <fieldset className="flex flex-row gap-2">
                    <input {...register("formaPagamento")} type="radio" id="credito" name="formaPagamento" value="credito" defaultChecked />
                    <label className="mr-5" htmlFor="credito">Cartão de Crédito</label>
                    <input {...register("formaPagamento")} type="radio" id="boleto" name="formaPagamento" value="boleto" />
                    <label htmlFor="boleto">Boleto Bancário</label>
                  </fieldset>
                </div>
                <div>
                  <label className="text-xs text-dark-gray-2 font-bold">
                    Nome do Cartão *
                    <input {...register("nomeCartao")} className="block w-full h-15 p-3 text-md rounded-lg bg-light-gray-3 mt-2 font-normal text-lg" type="text" placeholder="Insira o nome do Cartão" required />
                  </label>
                </div>
                <div className="flex flex-col lg:flex-row gap-2">
                  <div className="flex-1">
                    <label className="text-xs text-dark-gray-2 font-bold">
                      Número do Cartão *
                      <input {...register("numeroCartao")} className="block w-full h-15 p-3 text-md rounded-lg bg-light-gray-3 mt-2 font-normal text-lg" type="text" placeholder="Insira o número do cartão" required />
                    </label>
                  </div>
                  <div className="flex-1">
                    <label className="text-xs text-dark-gray-2 font-bold">
                      Validade do Cartão *
                      <input {...register("validadeCartao")} className="block w-full h-15 p-3 text-md rounded-lg bg-light-gray-3 mt-2 font-normal text-lg" type="month" placeholder="MM/AA" required />
                    </label>
                  </div>
                </div>
                <div className="lg:w-2/4">
                  <label className="text-xs text-dark-gray-2 font-bold">
                    CVV *
                    <input {...register("cvv")} className="block w-full h-15 p-3 text-md rounded-lg bg-light-gray-3 mt-2 font-normal text-lg" type="number" placeholder="CVV" required />
                  </label>
                </div>
              </div>
            </div>


            <div className="hidden lg:block flex-col p-8 bg-white rounded-sm">
              <div className="flex flex-col space-y-5 pb-5">
                <p className="text-sm text-dark-gray-2 font-bold">Finalizar Compra</p>
                <hr className=" border-light-gray-2" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-end">
                  <div className="flex flex-row justify-between">
                    <span className="text-dark-gray text-lg font-bold">Total:</span>
                    <span className="text-error font-bold text-lg">R$ {calcularTotal().toFixed(2)}</span>
                  </div>
                  <span className="text-light-gray text-xs">ou 10x de R$ {(calcularTotal() / 10).toFixed(2)}</span>
                </div>
                <button className="bg-warning font-bold rounded-lg text-white w-full h-13" type="submit">Realizar Pagamento</button>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-1/4 px-4 py-5 h-max bg-white rounded-sm mt-4 lg:mt-0">
            <div className="flex flex-col space-y-5 pb-5">
              <p className="text-lg text-dark-gray-2 font-bold">RESUMO</p>
              <hr className=" border-light-gray-2" />
            </div>
            <div className="flex flex-col gap-4">
              {carrinho.map((produto) => (
                <div key={produto.sku} className="flex items-center space-x-5">
                  <div className="bg-soft-purple">
                    <img
                      className="w-20 h-14 object-contain rounded-sm bg-[#E2E3FF]"
                      src={produto.image || "/default-image.png"}
                      alt={produto.name || "Produto sem nome"}
                    />
                  </div>
                  <span className="text-sm text-dark-gray font-bold">
                    {produto.name} ({produto.size || "Tamanho não disponível"})
                  </span>
                  <span className="text-sm text-dark-gray font-bold">
                    x{produto.qty} - R$ {garantirNumero(produto.price).toFixed(2)}
                  </span>
                </div>
              ))}
              <hr className=" border-light-gray-2" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-light-gray">Subtotal:</span>
                <span className="text-sm text-dark-gray">R$ {calcularSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-light-gray">Frete:</span>
                <span className="text-sm text-dark-gray">R$ {calcularFrete().toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-light-gray">Desconto:</span>
                <span className="text-sm text-dark-gray">R$ {calcularDesconto().toFixed(2)}</span>
              </div>
              <div className="text-end">
                <div className="flex flex-row justify-between">
                  <span className="text-dark-gray text-lg font-bold">Total:</span>
                  <span className="text-dark-gray font-bold text-lg">R$ {calcularTotal().toFixed(2)}</span>
                </div>
                <span className="text-light-gray text-xs">ou 10x de R$ {(calcularTotal() / 10).toFixed(2)} sem juros</span>
              </div>
              <button className="bg-warning font-bold rounded-lg text-white w-full h-13" type="submit">Realizar Pagamento</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CarrinhoConfirm;