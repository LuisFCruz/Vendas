import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PessoaModel } from './pessoa.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from '../shared/custom-validator';

@Component({
  selector: 'pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  @Input() ente: PessoaModel;
  @Output() enteChange = new EventEmitter();
  
  formularioPessoa: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formularioPessoa = this._formBuilder.group({
      //id: [null],
      nome: [null, [ Validators.required ]],
      tipoPessoa: [null],
      cpfCnpj: [null, [ Validators.required, Validators.minLength(14), Validators.maxLength(18), CustomValidator.cpfCnpj ]],
      rg: [null],
      sexo: [null],
      nomeFantasia: [null],
      tipoContribuinte: [null],
      inscricaoEstadual: [null],
      dataNascimento: [null, [ Validators.required ]],
      numeroCNH: [null],
      estadoCivil: [null],
      grauInstrucao: [null],
      profissao: [null],
      naturalidade: [null],
      telefone1: [null, [ Validators.required ]],
      telefone2: [null],
      telefone3: [null],
      telefone4: [null],
      email: [null, [ Validators.email ]]
    });

    this.atualizaFormulario();
  }

  onChange(key) {
    if (this.isValid(key)) {
      let enteAtribute = {};
      enteAtribute[key] = this.formularioPessoa.get(key).value;
      this.enteChange.emit(enteAtribute);
    } 
  }

  isValid(key) {
    return this.formularioPessoa.get(key).valid;
  }

  atualizaFormulario() {
    this.formularioPessoa.patchValue({
      nome: this.ente.nome,
      tipoPessoa: this.ente.tipoPessoa,
      cpfCnpj: this.ente.cpfCnpj,
      rg: this.ente.rg,
      sexo: this.ente.sexo,
      nomeFantasia: this.ente.nomeFantasia,
      tipoContribuinte: this.ente.tipoContribuinte,
      inscricaoEstadual: this.ente.inscricaoEstadual,
      dataNascimento: this.ente.dataNascimento,
      numeroCNH: this.ente.numeroCNH,
      estadoCivil: this.ente.estadoCivil,
      grauInstrucao: this.ente.grauInstrucao,
      profissao: this.ente.profissao,
      naturalidade: this.ente.naturalidade,
      telefone1: this.ente.telefone1,
      telefone2: this.ente.telefone2,
      telefone3: this.ente.telefone3,
      telefone4: this.ente.telefone4,
      email: this.ente.email
    });
  }
}
