import { ItemList } from "./ItemList";
import { UsuarioList } from "./UsuarioList";

export interface DoacaoList {
  id: string;
  dataCriacao: string;
  idUsuarioDoador?: string;
  itens: ItemList[];
  usuario: UsuarioList
}