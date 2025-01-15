import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWaiBindingComponent } from './two-wai-binding.component';

describe('TwoWaiBindingComponent', () => {
  let component: TwoWaiBindingComponent;
  let fixture: ComponentFixture<TwoWaiBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoWaiBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWaiBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
