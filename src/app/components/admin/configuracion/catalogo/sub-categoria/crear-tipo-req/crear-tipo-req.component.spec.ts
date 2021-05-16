import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoReqComponent } from './crear-tipo-req.component';

describe('CrearTipoReqComponent', () => {
  let component: CrearTipoReqComponent;
  let fixture: ComponentFixture<CrearTipoReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTipoReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTipoReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
