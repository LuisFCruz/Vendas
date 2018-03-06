import { Component, OnInit, Input } from '@angular/core';
import { EnderecoModel } from './endereco.model';

@Component({
  selector: 'endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() endereco: EnderecoModel;

  constructor() { }

  ngOnInit() {
  }

}
