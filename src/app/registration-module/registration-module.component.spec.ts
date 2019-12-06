import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationModuleComponent } from './registration-module.component';

describe('RegistrationModuleComponent', () => {
  let component: RegistrationModuleComponent;
  let fixture: ComponentFixture<RegistrationModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
