import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDptoComponent } from './listar-dpto.component';

describe('ListarDptoComponent', () => {
  let component: ListarDptoComponent;
  let fixture: ComponentFixture<ListarDptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
