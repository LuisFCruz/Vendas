import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { VendaComponent } from './venda/venda.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { EnderecoComponent } from './endereco/endereco.component';


@NgModule({
  declarations: [
    AppComponent,
    VendaComponent,
    PessoaComponent,
    EnderecoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
