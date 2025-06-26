import { useNavigate, Link } from "react-router-dom";
import CarrinhoForm from "../components/CarrinhoForm";

const CarrinhoPage = () => {
  const navigate = useNavigate();
   async function Submit(dados){
        console.log(dados);
        navigate('/carrinho/confirm');
    }
  return (
  <>
  <CarrinhoForm onSubmit={Submit} />
  </>
  );
}

export default CarrinhoPage;