import { Component, Input } from '@angular/core';
import { Transazione } from '../../dati/models/transazioni';

@Component({
  selector: 'app-transazioni-preview',
  templateUrl: './transazioni-preview.component.html',
  styleUrl: './transazioni-preview.component.css'
})
export class TransazioniPreviewComponent {
  @Input()
transazioni: Transazione | undefined
getBackgroundClass(type: string ) {
 
  switch (type) {
    
    case 'invoice':
      return 'bg-success'; 
   
    case 'deposit':
      return 'bg-secondary'; 
   
    default:
      return 'bg-light'; 
  }
}
importoTransazione(amount: number): string{
  
  return amount > 700 ? 'bg-warning' : ''; 
  
}



}
