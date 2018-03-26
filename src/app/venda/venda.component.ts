import { Component, OnInit } from '@angular/core';
import { PessoaModel } from '../pessoa/pessoa.model';
import { EnderecoModel } from '../endereco/endereco.model';

@Component({
  selector: 'venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  pessoa = new PessoaModel();

  constructor() { }

  ngOnInit() {
  }

  adicionarEndereco(endereco: EnderecoModel) {
    this.pessoa.addEndereco(endereco);
  }

  excluirEndereco(endereco: EnderecoModel) {
    const index = this.pessoa.enderecos.indexOf(endereco);
    this.pessoa.removerEndereco(index);
  }

  pessoaChange(atributo: object) {
    let keys = Object.keys(atributo);
    let key = keys[0];
    this.pessoa[key] = atributo[key];
    console.log(this.pessoa);
  }
}
