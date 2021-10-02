import { ItemList } from "./ItemList";
import { UsuarioList } from "./UsuarioList";

export interface DoacaoList {
  id: string;
  dataCriacao: string;
  itens: ItemList[];
  usuario: UsuarioList
}