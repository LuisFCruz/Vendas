import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ListagemEnderecoModule } from './listagem-endereco/listagem-endereco.module';
import { EnderecoModule } from './endereco/endereco.module';
import { VendaModule } from './venda/venda.module';
import { FormService } from './shared/form.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ListagemEnderecoModule,
    EnderecoModule,
    VendaModule
  ],
  providers: [ FormService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
