import { Component, OnInit } from '@angular/core';
import { PessoaModel } from './pessoa.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  formularioPessoa: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formularioPessoa = this._formBuilder.group({
      //id: [null],
      nome: [null],
      tipoPessoa: [null],
      cpfCnpj: [null],
      rg: [null],
      sexo: [null],
      nomeFantasia: [null],
      tipoContribuinte: [null],
      inscricaoEstadual: [null],
      dataNascimento: [null],
      cnh: [null],
      estadoCivil: [null],
      grauInstrucao: [null],
      profissao: [null],
      naturalidade: [null],
      fones: this._formBuilder.array([
        this._formBuilder.group({ fone: [null] }),
        this._formBuilder.group({ fone: [null] }),
        this._formBuilder.group({ fone: [null] }),
        this._formBuilder.group({ fone: [null] })
      ]),
      email: [null]
    });
  }
}
