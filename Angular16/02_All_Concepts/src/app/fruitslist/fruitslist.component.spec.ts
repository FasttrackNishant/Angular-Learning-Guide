import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitslistComponent } from './fruitslist.component';

describe('FruitslistComponent', () => {
  let component: FruitslistComponent;
  let fixture: ComponentFixture<FruitslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FruitslistComponent]
    });
    fixture = TestBed.createComponent(FruitslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
