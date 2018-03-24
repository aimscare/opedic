import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicioComponent } from './medicio.component';

describe('MedicioComponent', () => {
  let component: MedicioComponent;
  let fixture: ComponentFixture<MedicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
