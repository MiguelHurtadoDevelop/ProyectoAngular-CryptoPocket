import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesMonedasComponent } from './detalles-monedas.component';

describe('DetallesMonedasComponent', () => {
  let component: DetallesMonedasComponent;
  let fixture: ComponentFixture<DetallesMonedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesMonedasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesMonedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
