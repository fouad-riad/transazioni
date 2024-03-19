import { Component } from '@angular/core';
import { TRANSAZIONI } from '../../dati/transactions';
import { Transazione } from '../../dati/models/transazioni';

@Component({
  selector: 'app-elenco-transazioni',
  templateUrl: './elenco-transazioni.component.html',
  styleUrl: './elenco-transazioni.component.css'
})
export class ElencoTransazioniComponent {
transazioni :Transazione[]= TRANSAZIONI
eliminaTrasazione(t:Transazione){
 const i = this.transazioni.indexOf(t);
 if(i > -1){
  this.transazioni.splice(i,1)
 }
}
}
