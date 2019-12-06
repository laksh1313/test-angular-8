import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTesstComponent } from './product-tesst.component';

describe('ProductTesstComponent', () => {
  let component: ProductTesstComponent;
  let fixture: ComponentFixture<ProductTesstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTesstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTesstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
