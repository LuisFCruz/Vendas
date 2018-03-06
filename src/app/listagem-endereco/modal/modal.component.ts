import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EnderecoModel } from '../../endereco/endereco.model';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  endereco: EnderecoModel = new EnderecoModel();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.endereco.bairro = "Teste";
  }

}
