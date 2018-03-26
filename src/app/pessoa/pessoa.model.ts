import { EnderecoModel } from '../endereco/endereco.model';

export class PessoaModel {
  id: number;
  nome: string;
  tipoPessoa: number;
  cpfCnpj: string;
  rg: string;
  sexo: string;
  nomeFantasia: string;
  tipoContribuinte: number;
  inscricaoEstadual: string;
  dataNascimento: string;
  numeroCNH: string;
  estadoCivil: string;
  grauInstrucao: number;
  profissao: string;
  naturalidade: string;
  telefone1: string;
  telefone2: string;
  telefone3: string;
  telefone4: string;
  email: string;
  
  _enderecos: EnderecoModel[] = new Array<EnderecoModel>();

  get enderecos(): EnderecoModel[] {
    /*
     * Cria uma copia do array da entidade, assegurando que 
     * somente esta classe pode fazer alterações aplicadas no array
     * que será enviado.
     */
    return [].concat(...this._enderecos);
  }

  set enderecos(value: EnderecoModel[]) {
    this._enderecos = value;
  }

  addEndereco(value: EnderecoModel) {
    this._enderecos.push(value);
  }

  removerEndereco(key: number) {
    this._enderecos.splice(key, 1);
  }
}
