import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElencoTransazioniComponent } from './components/elenco-transazioni/elenco-transazioni.component';
import { TransazioniPreviewComponent } from './components/transazioni-preview/transazioni-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    ElencoTransazioniComponent,
    TransazioniPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
