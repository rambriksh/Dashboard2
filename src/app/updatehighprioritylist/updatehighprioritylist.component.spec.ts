import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatehighprioritylistComponent } from './updatehighprioritylist.component';

describe('UpdatehighprioritylistComponent', () => {
  let component: UpdatehighprioritylistComponent;
  let fixture: ComponentFixture<UpdatehighprioritylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatehighprioritylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatehighprioritylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
