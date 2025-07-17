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
            <h2 className="lg:visible md:visible sm:invisible invisible font-normal text-dark-gray-2">
              STATUS
            </h2>
          </div>

          <div className="lg:flex w-full py-5 lg:justify-between border-t-1 border-light-gray-2">
            <div className="flex flex-row">
              <div className="w-20 h-15 bg-secondary rounded-md shrink-0">
                <img
                  src="product-thumb-6.png"
                  className="object-contain w-full h-full"
                  alt=""
                />
              </div>
              <div className="flex justify-between ml-4">
                <div>
                  <p className="text-dark-gray-2 text-xs font-medium">
                    Pedido nº 2234981932
                  </p>
                  <h2 className="text-dark-gray font-bold text-md">
                    Tênis Nike Revolution 6 Next Nature Masculino
                  </h2>
                </div>
              </div>
            </div>
            <div className="py-5 flex justify-between">
              <h2 className="lg:invisible md:invisible sm:visible visible font-medium text-sm text-dark-gray-2">
                STATUS:
              </h2>
              <span className="text-warning font-bold text-sm">
                Produto em trânsito
              </span>
            </div>
          </div>

          <div className="lg:flex w-full py-5 lg:justify-between border-t-1 border-light-gray-2">
            <div className="flex flex-row">
              <div className="w-20 h-15 bg-secondary rounded-md shrink-0">
                <img
                  src="product-thumb-6.png"
                  className="object-contain w-full h-full"
                  alt=""
                />
              </div>
              <div className="flex justify-between ml-4">
                <div>
                  <p className="text-dark-gray-2 text-xs font-medium">
                    Pedido nº 2234981932
                  </p>
                  <h2 className="text-dark-gray font-bold text-md">
                    Tênis Nike Revolution 6 Next Nature Masculino
                  </h2>
                </div>
              </div>
            </div>
            <div className="py-5 flex justify-between">
              <h2 className="lg:invisible md:invisible sm:visible visible font-medium text-sm text-dark-gray-2">
                STATUS
              </h2>
              <span className="text-light-gray font-bold text-sm">
                Finalizado
              </span>
            </div>
          </div>

          <div className="lg:flex w-full py-5 lg:justify-between border-t-1 border-light-gray-2">
            <div className="flex flex-row">
              <div className="w-20 h-15 bg-secondary rounded-md shrink-0">
                <img
                  src="product-thumb-6.png"
                  className="object-contain w-full h-full"
                  alt=""
                />
              </div>
              <div className="flex justify-between ml-4">
                <div>
                  <p className="text-dark-gray-2 text-xs font-medium">
                    Pedido nº 2234981932
                  </p>
                  <h2 className="text-dark-gray font-bold text-md">
                    Tênis Nike Revolution 6 Next Nature Masculino
                  </h2>
                </div>
              </div>
            </div>
            <div className="py-5 flex justify-between">
              <h2 className="lg:invisible md:invisible sm:visible visible font-medium text-sm text-dark-gray-2">
                STATUS
              </h2>
              <span className="text-error font-bold text-sm">Cancelado</span>
            </div>
          </div>

          <div className="lg:flex w-full py-5 lg:justify-between border-t-1 border-light-gray-2">
            <div className="flex flex-row">
              <div className="w-20 h-15 bg-secondary rounded-md shrink-0">
                <img
                  src="product-thumb-6.png"
                  className="object-contain w-full h-full"
                  alt=""
                />
              </div>
              <div className="flex justify-between ml-4">
                <div>
                  <p className="text-dark-gray-2 text-xs font-medium">
                    Pedido nº 2234981932
                  </p>
                  <h2 className="text-dark-gray font-bold text-md">
                    Tênis Nike Revolution 6 Next Nature Masculino
                  </h2>
                </div>
              </div>
            </div>
            <div className="py-5 flex justify-between">
              <h2 className="lg:invisible md:invisible sm:visible visible font-medium text-sm text-dark-gray-2">
                STATUS
              </h2>
              <span className="text-light-gray font-bold text-sm">
                Finalizado
              </span>
            </div>
          </div>

          <div className="lg:flex w-full py-5 lg:justify-between border-t-1 border-light-gray-2">
            <div className="flex flex-row">
              <div className="w-20 h-15 bg-secondary rounded-md shrink-0">
                <img
                  src="product-thumb-6.png"
                  className="object-contain w-full h-full"
                  alt=""
                />
              </div>
              <div className="flex justify-between ml-4">
                <div>
                  <p className="text-dark-gray-2 text-xs font-medium">
                    Pedido nº 2234981932
                  </p>
                  <h2 className="text-dark-gray font-bold text-md">
                    Tênis Nike Revolution 6 Next Nature Masculino
                  </h2>
                </div>
              </div>
            </div>
            <div className="py-5 flex justify-between">
              <h2 className="lg:invisible md:invisible sm:visible visible font-medium text-sm text-dark-gray-2">
                STATUS
              </h2>
              <span className="text-light-gray font-bold text-sm">
                Finalizado
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default OrderPage;
