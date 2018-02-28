import { EnderecoModel } from "../endereco/endereco.model";

export class PessoaModel {
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

	enderecos: EnderecoModel[];
}