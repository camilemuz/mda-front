import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoReqComponent } from './editar-tipo-req.component';

describe('EditarTipoReqComponent', () => {
  let component: EditarTipoReqComponent;
  let fixture: ComponentFixture<EditarTipoReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTipoReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTipoReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
