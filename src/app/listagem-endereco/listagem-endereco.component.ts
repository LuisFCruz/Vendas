import { Component, OnInit } from '@angular/core';
import { EnderecoModel } from '../endereco/endereco.model';

@Component({
  selector: 'listagem-endereco',
  templateUrl: './listagem-endereco.component.html',
  styleUrls: ['./listagem-endereco.component.css']
})
export class ListagemEnderecoComponent implements OnInit {

  enderecos: EnderecoModel[];

  constructor() { }

  ngOnInit() {
  }

}
