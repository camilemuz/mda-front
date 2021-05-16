import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDptoComponent } from './editar-dpto.component';

describe('EditarDptoComponent', () => {
  let component: EditarDptoComponent;
  let fixture: ComponentFixture<EditarDptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
