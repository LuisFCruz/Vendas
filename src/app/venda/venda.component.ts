import { Component, OnInit } from '@angular/core';
import { PessoaModel } from '../pessoa/pessoal.model';

@Component({
  selector: 'venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  pessoa: PessoaModel;

  constructor() { }

  ngOnInit() {
  }

}
