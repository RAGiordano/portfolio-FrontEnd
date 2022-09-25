import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoPersonalComponent } from './encabezado-personal.component';

describe('EncabezadoPersonalComponent', () => {
  let component: EncabezadoPersonalComponent;
  let fixture: ComponentFixture<EncabezadoPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncabezadoPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncabezadoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
