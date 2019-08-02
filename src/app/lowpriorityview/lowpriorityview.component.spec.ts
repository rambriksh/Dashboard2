import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowpriorityviewComponent } from './lowpriorityview.component';

describe('LowpriorityviewComponent', () => {
  let component: LowpriorityviewComponent;
  let fixture: ComponentFixture<LowpriorityviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowpriorityviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowpriorityviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
