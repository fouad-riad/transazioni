import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoTransazioniComponent } from './elenco-transazioni.component';

describe('ElencoTransazioniComponent', () => {
  let component: ElencoTransazioniComponent;
  let fixture: ComponentFixture<ElencoTransazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElencoTransazioniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElencoTransazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
