import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CarrinhoSucess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  useEffect(() => {
    if (!data) {
      navigate("/");
    }
  }, [data, navigate]);

  if (!data) return null;

  const {
    nome,
    cpf,
    email,
    telefone,
    endereco,
    bairro,
    cidade,
    cep,
    carrinho,
    total,
    nomeCartao,
    numeroCartao,
  } = data;

  return (
    <main className="flex flex-col items-center bg-light-gray-3 py-6 w-full min-h-screen">
      <div className="w-full max-w-2xl mx-auto py-10 px-6 bg-white rounded-md">
        <div className="w-full text-center border-b border-light-gray-2 pb-5">
          <span className="text-9xl" role="img" aria-label="confetti">
            🎉
          </span>
          <h1 className="text-4xl mt-5 font-bold text-dark-gray mb-2">
            Compra realizada com sucesso!
          </h1>
        </div>

        <div className="space-y-6 mt-6">
          <section className="border-b border-light-gray-2 pb-5">
            <h2 className="text-sm font-bold text-dark-gray-2 mb-2">
              Informações Pessoais
            </h2>
            <p>
              Nome: <strong>{nome}</strong>
            </p>
            <p>
              CPF: <strong>{cpf}</strong>
            </p>
            <p>
              Email: <strong>{email}</strong>
            </p>
            <p>
              Celular: <strong>{telefone}</strong>
            </p>
          </section>

          <section className="border-b border-light-gray-2 pb-5">
            <h2 className="text-sm font-bold text-dark-gray-2 mb-2">
              Informações de Entrega
            </h2>
            <p>
              Endereço: <strong>{endereco}</strong>
            </p>
            <p>
              Bairro: <strong>{bairro}</strong>
            </p>
            <p>
              Cidade: <strong>{cidade}</strong>
            </p>
            <p>
              CEP: <strong>{cep}</strong>
            </p>
          </section>

          <section className="border-b border-light-gray-2 pb-5">
            <h2 className="text-sm font-bold text-dark-gray-2 mb-2">
              Informações de Pagamento
            </h2>
            <p>
              Titular do Cartão:{" "}
              <strong>{nomeCartao?.toUpperCase()}</strong>
            </p>
            <p>
              Final: <strong>************{numeroCartao?.slice(-4)}</strong>
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold text-dark-gray-2 mb-3">
              Resumo da compra
            </h2>
            {carrinho?.map((item, i) => (
              <div key={i} className="flex items-center gap-4 mb-2">
                <img
                  src={item.image || "/default-image.png"}
                  alt={item.name}
                  className="w-16 h-14 object-contain rounded bg-[#E2E3FF]"
                />
                <div className="text-sm">
                  <p className="font-semibold text-dark-gray leading-tight">
                    {item.name}
                  </p>
                  <p className="text-light-gray">
                    {item.tags?.[1] || "Produto"}
                  </p>
                </div>
              </div>
            ))}

            <div className="bg-yellow-50 p-4 rounded-md mt-4">
              <div className="flex justify-between font-bold text-lg text-dark-gray">
                <span>Total</span>
                <span>R$ {total?.toFixed(2).replace(".", ",")}</span>
              </div>
              <p className="text-xs text-gray-400 text-right">
                ou 10x de R$ {(total / 10).toFixed(2).replace(".", ",")} sem
                juros
              </p>
            </div>
          </section>

          <div className="text-center mt-8">
            <button
              onClick={() => window.print()}
              className="text-sm underline text-gray-600 hover:text-dark-gray focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Imprimir Recibo
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 w-full px-4">
        <button
          onClick={() => navigate("/")}
          className="bg-warning text-white py-3 rounded-md font-semibold w-full max-w-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          Voltar para Home
        </button>
      </div>
    </main>
  );
};

export default CarrinhoSucess;
