import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EnderecoModel } from './endereco.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() endereco: EnderecoModel;
  @Output() salvar = new EventEmitter<EnderecoModel>();
  @Output() cancelar = new EventEmitter();

  formulario: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this._formBuilder.group({
      id: [null],
      logradouro: [null],
      numero: [null],
      complemento: [null],
      referencia: [null],
      cep: [null],
      bairro: [null],
      cidade: [null]
    });
  }

  salvarEndereco() {
    this.salvar.emit(this.formulario.value);
  }

  resetar() {
    this.cancelar.emit();
  }

}
