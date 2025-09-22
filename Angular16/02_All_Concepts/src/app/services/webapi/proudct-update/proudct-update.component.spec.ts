import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudctUpdateComponent } from './proudct-update.component';

describe('ProudctUpdateComponent', () => {
  let component: ProudctUpdateComponent;
  let fixture: ComponentFixture<ProudctUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProudctUpdateComponent]
    });
    fixture = TestBed.createComponent(ProudctUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
