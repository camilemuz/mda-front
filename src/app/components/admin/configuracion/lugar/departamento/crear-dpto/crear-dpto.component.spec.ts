import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDptoComponent } from './crear-dpto.component';

describe('CrearDptoComponent', () => {
  let component: CrearDptoComponent;
  let fixture: ComponentFixture<CrearDptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
