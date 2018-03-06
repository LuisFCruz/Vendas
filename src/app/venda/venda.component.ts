import { Component, OnInit } from '@angular/core';
import { PessoaModel } from '../pessoa/pessoal.model';
import { EnderecoModel } from '../endereco/endereco.model';

@Component({
  selector: 'venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  pessoa: PessoaModel = new PessoaModel();

  constructor() { }

  ngOnInit() {
  }

  adicionarEndereco(endereco: EnderecoModel) {
    console.log(endereco);
    this.pessoa.addEndereco(endereco);
  }

}
