import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddComponent } from './button-add.component';

describe('ButtonAddComponent', () => {
  let component: ButtonAddComponent;
  let fixture: ComponentFixture<ButtonAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe imitir el valor de 1', () => {
    let nuevoContador=0;
    component.onAdd.subscribe(contador =>{
      nuevoContador=contador;
    });

    component.aumentar();
    expect(nuevoContador).toBe(1);
    
  });

});
