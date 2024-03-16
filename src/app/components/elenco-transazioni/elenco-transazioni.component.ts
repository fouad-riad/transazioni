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
}
