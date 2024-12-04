import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalTareasPage } from './modal-tareas.page';

describe('ModalTareasPage', () => {
  let component: ModalTareasPage;
  let fixture: ComponentFixture<ModalTareasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
