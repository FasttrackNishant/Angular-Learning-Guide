import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inline1Component } from './inline1.component';

describe('Inline1Component', () => {
  let component: Inline1Component;
  let fixture: ComponentFixture<Inline1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Inline1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inline1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
