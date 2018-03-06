import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EnderecoModel } from '../endereco/endereco.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'listagem-endereco',
  templateUrl: './listagem-endereco.component.html',
  styleUrls: ['./listagem-endereco.component.css']
})
export class ListagemEnderecoComponent implements OnInit {

  enderecos: EnderecoModel[];
  @Output() adicionar = new EventEmitter<EnderecoModel>();

  constructor(private _modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    const modalRef = this._modalService.open(ModalComponent);
    modalRef.componentInstance.titulo = 'Endereço';
    modalRef.result.then((endereco:EnderecoModel) => {
      console.log(endereco);
      this.salvarEndereco(endereco);
    }, (reason) => {});
  }

  salvarEndereco(endereco: EnderecoModel){
    this.adicionar.emit(endereco);
  }
}
