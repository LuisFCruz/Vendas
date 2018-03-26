import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EnderecoModel } from './endereco.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../shared/form.service';

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

  constructor(
    private _formBuilder: FormBuilder,
    private _formService: FormService
  ) { }

  /**
   * Primeira função que vai ser execultada ao contruir o componente.
   * 
   * O ClienteEnderecoId é bom que seja padronizado para id para que o componente seja 
   * aproveitado em outras telas.
   */
  ngOnInit() {
    this.formulario = this._formBuilder.group({
      id: [null],
      logradouro: [null, [ Validators.required ]],
      numero: [null, [ Validators.required ]],
      complemento: [null, [ Validators.required ]],
      referencia: [null],
      cep: [null, [ Validators.required ]],
      bairro: [null, [ Validators.required ]],
      cidade: [null, [ Validators.required ]]
    });
  }

  salvarEndereco() {
    if (this.formulario.valid)
      this.salvar.emit(this.formulario.value);
    else 
      this._formService.checarValidacao(this.formulario);
  }

  resetar() {
    this.cancelar.emit();
  }

}
