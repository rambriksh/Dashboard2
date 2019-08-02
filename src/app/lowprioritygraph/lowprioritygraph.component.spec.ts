import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowprioritygraphComponent } from './lowprioritygraph.component';

describe('LowprioritygraphComponent', () => {
  let component: LowprioritygraphComponent;
  let fixture: ComponentFixture<LowprioritygraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowprioritygraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowprioritygraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
