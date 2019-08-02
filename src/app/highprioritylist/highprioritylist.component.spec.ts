import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighprioritylistComponent } from './highprioritylist.component';

describe('HighprioritylistComponent', () => {
  let component: HighprioritylistComponent;
  let fixture: ComponentFixture<HighprioritylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighprioritylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighprioritylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
