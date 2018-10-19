import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsuariosComponent } from './add-usuarios.component';

describe('AddUsuariosComponent', () => {
  let component: AddUsuariosComponent;
  let fixture: ComponentFixture<AddUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
