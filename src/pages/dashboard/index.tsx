import CardDash from "../../components/card-dash";
import TableDash from "./table-dash";
import { useDashboardList } from "./use-dasboard-list";

const Dashboard = () => {
  const { dash } = useDashboardList();

  const totalAmount = dash.reduce((total, amount) => {
    return total + amount.valorTotal;
  }, 0);

  const totalOrder = dash.length;

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-5 gap-10">
      <div className="w-3/4">
        <h1 className="text-start text-primary font-bold text-2xl">Pedidos</h1>
      </div>
      <div className="w-3/4 flex justify-center items-center gap-5">
        <div className="w-2/4">
          <CardDash
            borderColor="border-green-600"
            titleCard="Total de Pedidos - (R$)"
            contentCard={`R$ ${totalAmount.toFixed(2)}`}
          />
        </div>
        <div className="w-2/4">
          <CardDash
            borderColor="border-yellow-500"
            titleCard="Total Pedidos - (Un)"
            contentCard={totalOrder.toLocaleString()}
          />
        </div>
      </div>
      <div className="w-3/4 flex justify-center items-center gap-5">
        <TableDash />
      </div>
    </div>
  );
};

export default Dashboard;
