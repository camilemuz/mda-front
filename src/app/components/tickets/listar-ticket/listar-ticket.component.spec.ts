import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTicketComponent } from './listar-ticket.component';

describe('ListarTicketComponent', () => {
  let component: ListarTicketComponent;
  let fixture: ComponentFixture<ListarTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
