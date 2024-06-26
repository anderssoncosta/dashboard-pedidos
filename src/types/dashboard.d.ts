declare namespace Dashboard {
  interface IOrder {
    id: number;
    data: string;
    valorTotal: number;
    produtos: IProduct;
    cliente: IClient;
    status: string;
  }

  interface IProduct {
    [x: string]: any;
    id: number;
    nome: string;
    valor: number;
  }

  interface IClient {
    id: number;
    nome: string;
    email: string;
    cpf: string;
  }
}
