import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowprioritylistComponent } from './lowprioritylist.component';

describe('LowprioritylistComponent', () => {
  let component: LowprioritylistComponent;
  let fixture: ComponentFixture<LowprioritylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowprioritylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowprioritylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
