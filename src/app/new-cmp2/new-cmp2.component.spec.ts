import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCmp2Component } from './new-cmp2.component';

describe('NewCmp2Component', () => {
  let component: NewCmp2Component;
  let fixture: ComponentFixture<NewCmp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCmp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCmp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
