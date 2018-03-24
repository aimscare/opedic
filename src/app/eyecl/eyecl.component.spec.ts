import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeclComponent } from './eyecl.component';

describe('EyeclComponent', () => {
  let component: EyeclComponent;
  let fixture: ComponentFixture<EyeclComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyeclComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyeclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
