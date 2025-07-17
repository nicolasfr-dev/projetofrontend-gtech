import { NavLink } from "react-router-dom";
import Section from "../components/Section";

const OrderPage = () => {
  return (
    <>
      <main className="px-4 sm:px-8 md:px-12 lg:px-75 pt-14 lg:pt-20 pb-23 lg:pb-36 rounded-sm bg-light-gray-3 flex">
        <aside className="invisible hidden lg:visible p-8 mr-4 lg:flex flex-col lg:w-1/4 h-full bg-white">
          <h1 className="font-bold text-dark-gray-2 pb-5 w-full">Meu Perfil</h1>

          {[
            { to: "/pedidos", label: "Meus Pedidos" },
            { to: "/informacoes", label: "Minhas Informações" },
            { to: "/metodos-pagamento", label: "Métodos de Pagamento" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-dark-gray-2 py-5 hover:text-dark-gray-4 border-t-1 border-light-gray-2 h-full w-full ${
                  isActive
                    ? "text-primary font-bold"
                    : "text-dark-gray-2 font-normal"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </aside>

        <section className="w-full lg:flex-row lg:w-3/4 p-8 bg-white">
          <div className="flex justify-between pb-5">
            <h1 className="font-bold text-dark-gray-2">Meus pedidos</h1>
            <h2 className="lg:visible md:visible sm:invisible invisible font-normal text-primary underline">Editar</h2>
          </div>

          <div className="lg:flex-col w-full py-5 lg:justify-between border-t-1 space-y-2 tracking-wide border-light-gray-2">
            <h2 className="font-bold text-dark-gray-2">Informações Pessoais</h2>
            <span className="text-light-gray block">
              Nome: <span className="ml-2 text-dark-gray font-normal">Francisco Antonio Pereira</span>
            </span>

            <span className="text-light-gray block">
              CPF: <span className="ml-2 text-dark-gray font-normal">123.456.789-00</span>
            </span>

            <span className="text-light-gray block">
              Email: <span className="ml-2 text-dark-gray font-normal">francisco@gmail.com</span>
            </span>

            <span className="text-light-gray block">
              Telefone: <span className="ml-2 text-dark-gray font-normal">(85) 5555-5555</span>
            </span>
          </div>

          <div className="lg:flex-col w-full py-5 lg:justify-between border-t-1 space-y-2 tracking-wide border-light-gray-2">
            <h2 className="font-bold text-dark-gray-2">Informações de Entrega</h2>
            <span className="text-light-gray block">
              Endereço: <span className="ml-2 text-dark-gray font-normal">Avenida João Pessoa, 333</span>
            </span>

            <span className="text-light-gray block">
              Bairro: <span className="ml-2 text-dark-gray font-normal">Centro</span>
            </span>

            <span className="text-light-gray block">
              Cidade: <span className="ml-2 text-dark-gray font-normal">Fortaleza, Ceará</span>
            </span>

            <span className="text-light-gray block">
              CEP: <span className="ml-2 text-dark-gray font-normal">60000-000</span>
            </span>
          </div>
        </section>
      </main>
    </>
  );
};

export default OrderPage;
