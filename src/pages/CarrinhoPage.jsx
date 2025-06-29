import { useNavigate } from "react-router-dom";
import CarrinhoForm from "../components/CarrinhoForm";

const CarrinhoPage = () => {
  const navigate = useNavigate();

  function Submit(dados) {
    console.log(dados);
    navigate("/carrinho/confirm");
  }

  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-dark-gray mb-6">Seu Carrinho</h1>
      <CarrinhoForm onSubmit={Submit} />
    </main>
  );
};

export default CarrinhoPage;
