import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemEnderecoComponent } from './listagem-endereco.component';
import { ModalModule } from './modal/modal.module';
import { ModalComponent } from './modal/modal.component';
import { MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    MatTableModule
  ],
  declarations: [
    ListagemEnderecoComponent
  ],
  exports: [ ListagemEnderecoComponent ],
  entryComponents: [ModalComponent]
})
export class ListagemEnderecoModule { }
