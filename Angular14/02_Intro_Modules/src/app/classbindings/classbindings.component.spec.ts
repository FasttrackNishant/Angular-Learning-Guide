import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassbindingsComponent } from './classbindings.component';

describe('ClassbindingsComponent', () => {
  let component: ClassbindingsComponent;
  let fixture: ComponentFixture<ClassbindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassbindingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassbindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
