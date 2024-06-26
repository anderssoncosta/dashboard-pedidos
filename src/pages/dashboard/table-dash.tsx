import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../@/components/ui/table";

import { useDashboardList } from "./use-dasboard-list";
import { Badge } from "../../@/components/ui/badge";

const TableDash = () => {
  const { dash } = useDashboardList();
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dash.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(dash.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Rastreio e nota enviados":
        return "bg-green-400";
      case "Problema na entrega":
        return "bg-red-400";
      case "Confirmação de Entrega":
        return "bg-blue-400";
      case "Reembolso solicitado":
        return "bg-yellow-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div>
      <Table>
        <TableHeader className="bg-primary">
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-72 text-white">ID</TableHead>
            <TableHead className="w-72 text-white">Nome Produto(s)</TableHead>
            <TableHead className="w-72 text-white">Valor Total</TableHead>
            <TableHead className="w-72 text-white">E-mail</TableHead>
            <TableHead className="w-72 text-white">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white">
          {currentItems.map((item, index) => (
            <TableRow key={index}>
              <TableHead key={item.id}>{item.id}</TableHead>
              <TableHead key={item.id} className="flex items-center">
                {item.produtos.map((produto) => produto.nome).join(" - ")}
              </TableHead>
              <TableCell>{`R$ ${item.valorTotal.toFixed(2)}`}</TableCell>
              <TableCell>{item.cliente.email}</TableCell>
              <TableCell className="text-center">
                <Badge className={`${getStatusColor(item.status)}`}>
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-between mt-4">
        <button
          className={`bg-primary text-white font-bold py-2 px-4 rounded ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <button
          className={`bg-primary  text-white font-bold py-2 px-4 rounded ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default TableDash;
