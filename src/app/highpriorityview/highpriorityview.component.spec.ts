import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighpriorityviewComponent } from './highpriorityview.component';

describe('HighpriorityviewComponent', () => {
  let component: HighpriorityviewComponent;
  let fixture: ComponentFixture<HighpriorityviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighpriorityviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighpriorityviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
