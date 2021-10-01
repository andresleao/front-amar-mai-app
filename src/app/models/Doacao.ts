import { DoacaoUsuario } from "./DoacaoUsuario";
import { Item } from '../models/Item';

export interface Doacao {
  usuario: DoacaoUsuario
  itens: Item[]
}