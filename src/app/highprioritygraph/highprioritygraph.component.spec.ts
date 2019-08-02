import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighprioritygraphComponent } from './highprioritygraph.component';

describe('HighprioritygraphComponent', () => {
  let component: HighprioritygraphComponent;
  let fixture: ComponentFixture<HighprioritygraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighprioritygraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighprioritygraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
