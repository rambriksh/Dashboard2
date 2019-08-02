import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumprioritylistComponent } from './mediumprioritylist.component';

describe('MediumprioritylistComponent', () => {
  let component: MediumprioritylistComponent;
  let fixture: ComponentFixture<MediumprioritylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumprioritylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumprioritylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
