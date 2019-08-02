import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrirityComponent } from './pririty.component';

describe('PrirityComponent', () => {
  let component: PrirityComponent;
  let fixture: ComponentFixture<PrirityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrirityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrirityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
