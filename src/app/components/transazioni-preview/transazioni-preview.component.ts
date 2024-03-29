import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transazione } from '../../dati/models/transazioni';

@Component({
  selector: 'app-transazioni-preview',
  templateUrl: './transazioni-preview.component.html',
  styleUrl: './transazioni-preview.component.css'
})
export class TransazioniPreviewComponent {
  @Input()
transazioni: Transazione | undefined
/* getBackgroundClass(type: string ) {
 
  switch (type) {
    
    case 'invoice':
      return 'bg-success'; 
   
    case 'withdrawal':
      return 'bg-secondary'; 
   
    default:
      return 'bg-light'; 
  }
}
importoTransazione(amount: number): string{
  
  return amount > 700 ? 'bg-warning' : ''; 
  
} */
@Output()
onRichiestaEliminazione = new EventEmitter<Transazione>()
/* onRichiestaEliminazione = output<Transazione>() */
elimina(){
this.onRichiestaEliminazione.emit(this.transazioni)
}




}
