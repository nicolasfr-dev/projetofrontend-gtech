import { useForm } from "react-hook-form";
import { useCarrinho } from "../data/context/CarrinhoContext.jsx";
import ProductListing from "./ProductListing.jsx";
import products from "../data/Products.jsx";
import Section from "./Section.jsx";
import ArrowRight2 from "../assets/arrow-right-2.svg";
import { Link } from "react-router-dom";

const CarrinhoForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();
  const { carrinho, removerDoCarrinho } = useCarrinho();

  const handleFinalSubmit = (data) => {
    onSubmit?.(data);
    reset();
  };

  const subtotal = carrinho.reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0
  );

  const desconto = carrinho.reduce((acc, item) => {
    if (item.oldPrice && item.oldPrice > item.price) {
      return acc + (item.oldPrice - item.price) * (item.qty || 1);
    }
    return acc;
  }, 0);

  const frete = 0;

  const total = subtotal - desconto + frete;

  return (
    <form onSubmit={handleSubmit(handleFinalSubmit)}>
      <div className="w-full max-w-7xl  flex flex-col lg:flex-row justify-center bg-light-gray-3 h-full pb-5 gap-2">
        {/* Coluna principal */}
        <div className="flex flex-col w-full lg:w-3/4 pb-5">
          <div className="flex flex-col py-5 px-4 h-full bg-white rounded-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-dark-gray font-bold uppercase">
                Meu Carrinho
              </h2>
              <div className="hidden lg:flex gap-20 text-sm uppercase text-dark-gray">
                <span>Quantidade</span>
                <span>Unitário</span>
                <span>Total</span>
              </div>
            </div>

            <div className="border-y border-light-gray-2">
              {carrinho.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 gap-4"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.image || "/product-thumb.png"}
                      className="w-24 h-20 object-contain rounded-sm bg-[#E2E3FF]"
                      alt={item.name}
                    />
                    <div>
                      <div className="font-bold text-sm mb-2">{item.name}</div>
                      <div className="text-sm text-light-gray">
                        Cor: {item.color}
                      </div>
                      <div className="text-sm text-light-gray">
                        Tamanho: {item.size}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-12 items-center">
                    <div className="text-center">
                      <span>{item.qty || 1}</span>
                      <button
                        type="button"
                        onClick={() => removerDoCarrinho(item.sku)}
                        className="block text-xs text-dark-gray-2 underline"
                      >
                        Remover
                      </button>
                    </div>

                    <div className="flex flex-col items-center">
                      {item.oldPrice && item.oldPrice > item.price && (
                        <span className="text-xs line-through text-light-gray-2">
                          R$ {item.oldPrice.toFixed(2).replace(".", ",")}
                        </span>
                      )}
                      <span className="font-bold text-base text-dark-gray-2">
                        R$ {item.price.toFixed(2).replace(".", ",")}
                      </span>
                    </div>

                    <div className="font-bold text-base text-dark-gray-2">
                      R${" "}
                      {(item.price * (item.qty || 1))
                        .toFixed(2)
                        .replace(".", ",")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cupom e Frete */}
          <div className="flex flex-col md:flex-row gap-4 mt-4 mb-0 lg:mb-30">
            <div className="flex flex-col gap-3 w-full md:w-1/2 bg-white p-5 rounded">
              <label className="text-xs font-bold text-dark-gray-2">
                Cupom de desconto
                <div className="flex mt-2 gap-2">
                  <input
                    type="text"
                    className="w-full h-15 p-3 rounded-lg bg-light-gray-3 text-lg"
                    placeholder="Insira seu código"
                    {...register("codigoCupom")}
                  />
                  <button
                    type="button"
                    onClick={() => console.log("Aplicar cupom")}
                    className="bg-light-gray-3 h-15 w-28 rounded-lg text-primary"
                  >
                    OK
                  </button>
                </div>
              </label>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-1/2 bg-white p-5 rounded">
              <label className="text-xs font-bold text-dark-gray-2">
                Calcular frete
                <div className="flex mt-2 gap-2">
                  <input
                    type="text"
                    className="w-full h-15 p-3 rounded-lg bg-light-gray-3 text-lg"
                    placeholder="Insira seu CEP"
                    {...register("cepFrete")}
                  />
                  <button
                    type="button"
                    onClick={() => console.log("Calcular frete")}
                    className="bg-light-gray-3 h-15 w-28 rounded-lg text-primary"
                  >
                    OK
                  </button>
                </div>
              </label>
            </div>
          </div>
          
          <div className="invisible hidden lg:visible lg:block"> 
          <Section
            title="Produtos em alta"
            link={
              <Link className="flex gap-2 items-center" to="/produtos">
                Ver tudo <img className="w-5" src={ArrowRight2} alt="Seta" />
              </Link>
            }
            content={<ProductListing preset="4x1" products={products} />}
            />
            </div>
        </div>

        {/* Resumo */}
        <div className="w-full lg:w-1/4 p-5 bg-white rounded-sm mt-4 lg:mt-0 self-start">
          <h3 className="text-dark-gray-2 border-b border-light-gray-2 pb-2 font-bold uppercase">
            Resumo
          </h3>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-light-gray">Subtotal</span>
              <span className="font-bold">
                R$ {subtotal.toFixed(2).replace(".", ",")}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-light-gray">Frete</span>
              <span className="font-bold">
                R$ {frete.toFixed(2).replace(".", ",")}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-light-gray">Desconto</span>
              <span className="font-bold">
                R$ {desconto.toFixed(2).replace(".", ",")}
              </span>
            </div>
            <div className="flex justify-between text-lg">
              <span className="font-bold text-dark-gray">Total:</span>
              <span className="font-bold text-error">
                R$ {total.toFixed(2).replace(".", ",")}
              </span>
            </div>
            <p className="text-xs text-light-gray">
              ou 10x de R$ {(total / 10).toFixed(2).replace(".", ",")} sem juros
            </p>
          </div>
          <button
            className="mt-4 w-full h-13 bg-warning rounded-lg text-white font-bold"
            type="submit"
          >
            Continuar
          </button>
        </div>
      </div>
    </form>
  );
};

export default CarrinhoForm;
