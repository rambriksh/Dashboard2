import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumpriorityviewComponent } from './mediumpriorityview.component';

describe('MediumpriorityviewComponent', () => {
  let component: MediumpriorityviewComponent;
  let fixture: ComponentFixture<MediumpriorityviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumpriorityviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumpriorityviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
