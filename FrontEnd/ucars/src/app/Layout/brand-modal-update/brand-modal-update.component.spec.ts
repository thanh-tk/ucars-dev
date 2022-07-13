import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandModalUpdateComponent } from './brand-modal-update.component';

describe('BrandModalUpdateComponent', () => {
  let component: BrandModalUpdateComponent;
  let fixture: ComponentFixture<BrandModalUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandModalUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandModalUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
