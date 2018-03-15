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
  cnh: string;
  estadoCivil: string;
  grauInstrucao: number;
  profissao: string;
  naturalidade: string;
  fones: string[];
  email: string;

  _enderecos: EnderecoModel[] = new Array<EnderecoModel>();

  get enderecos(): EnderecoModel[] {
    return [].concat(...this._enderecos);
  }

  set enderecos(value: EnderecoModel[]) {
    this._enderecos = value;
  }

  addEndereco(value: EnderecoModel) {
    this._enderecos.push(value);
  }
}
