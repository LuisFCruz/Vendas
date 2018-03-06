import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { EnderecoComponent } from '../../endereco/endereco.component';
import { EnderecoModule } from '../../endereco/endereco.module';

@NgModule({
  imports: [
    CommonModule,
    EnderecoModule
  ],
  declarations: [ModalComponent],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }
