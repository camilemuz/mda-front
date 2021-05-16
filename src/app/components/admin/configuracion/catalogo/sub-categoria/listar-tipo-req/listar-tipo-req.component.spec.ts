import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoReqComponent } from './listar-tipo-req.component';

describe('ListarTipoReqComponent', () => {
  let component: ListarTipoReqComponent;
  let fixture: ComponentFixture<ListarTipoReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTipoReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipoReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
