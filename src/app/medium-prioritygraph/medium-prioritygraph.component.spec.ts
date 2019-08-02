import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumPrioritygraphComponent } from './medium-prioritygraph.component';

describe('MediumPrioritygraphComponent', () => {
  let component: MediumPrioritygraphComponent;
  let fixture: ComponentFixture<MediumPrioritygraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumPrioritygraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumPrioritygraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
