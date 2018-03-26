import { Component, OnInit, Output, EventEmitter, Input, Renderer2, OnDestroy, OnChanges, IterableDiffers } from '@angular/core';
import { EnderecoModel } from '../endereco/endereco.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'listagem-endereco',
  templateUrl: './listagem-endereco.component.html',
  styleUrls: ['./listagem-endereco.component.css']
})
export class ListagemEnderecoComponent implements OnInit, OnDestroy, OnChanges {

  //Elemento de entrada do componente
  @Input() enderecos: EnderecoModel[]; 
  //Elemento de saida do componente
  @Output() adicionar = new EventEmitter<EnderecoModel>();
  @Output() excluir = new EventEmitter<EnderecoModel>();

  tableDataSource: MatTableDataSource<EnderecoModel>;
  displayedColumns = ['logradouro', 'numero', 'cep', 'bairro', 'cidade'];
  enderecosDiffer;
  enderecoSelecionado: EnderecoModel;

  private _removeEventListenerKeydown;

  constructor(
    private _modalService: NgbModal,
    private _renderer: Renderer2,
    private _differs: IterableDiffers
  ) {
    this.enderecosDiffer = this._differs.find([]).create(null);
   }

  ngOnInit() {
    this._removeEventListenerKeydown = this._renderer.listen('document', 'keydown', (event: KeyboardEvent) => {
      const key = event.key || "";
      switch (key.toLowerCase()) {
        case 'f10':
          event.preventDefault();
          this.open();
          break;
        case 'f11':
          event.preventDefault();
          break;
        case 'f12':
          event.preventDefault();
          break;
        default:
        break;
      }

    });

    this.atualizarEnderecos();
  }

  ngOnChanges() {
    const hasChange = this.enderecosDiffer.diff(this.enderecos);
    if(hasChange) this.atualizarEnderecos();
  }

  open() {
    const modalRef = this._modalService.open(ModalComponent);
    modalRef.componentInstance.titulo = 'Endereço';
    modalRef.result.then((endereco: EnderecoModel) => {
      this.salvarEndereco(endereco);
    }, (reason) => { });
  }

  salvarEndereco(endereco: EnderecoModel) {
    this.adicionar.emit(endereco);
  }

  excluirEndereco() {
    if (this.enderecoSelecionado) {
      this.excluir.emit(this.enderecoSelecionado);
      this.enderecoSelecionado = null;
    }
  }
  
  atualizarEnderecos() {
    this.tableDataSource = new MatTableDataSource<EnderecoModel>(this.enderecos);
  }

  selectionarLinha(endereco) {
    this.enderecoSelecionado = endereco;
  }

  estaSelecionada(endereco){
    return this.enderecoSelecionado == endereco;
  }
  
  ngOnDestroy() {
    this._removeEventListenerKeydown();
  }
  
}
