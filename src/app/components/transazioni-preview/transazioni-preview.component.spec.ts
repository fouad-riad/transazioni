import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransazioniPreviewComponent } from './transazioni-preview.component';

describe('TransazioniPreviewComponent', () => {
  let component: TransazioniPreviewComponent;
  let fixture: ComponentFixture<TransazioniPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransazioniPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransazioniPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
