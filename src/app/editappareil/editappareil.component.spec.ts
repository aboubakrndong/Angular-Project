import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditappareilComponent } from './editappareil.component';

describe('EditappareilComponent', () => {
  let component: EditappareilComponent;
  let fixture: ComponentFixture<EditappareilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditappareilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditappareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
