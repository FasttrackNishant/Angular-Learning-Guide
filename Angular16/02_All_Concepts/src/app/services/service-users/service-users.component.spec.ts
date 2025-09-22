import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceUsersComponent } from './service-users.component';

describe('ServiceUsersComponent', () => {
  let component: ServiceUsersComponent;
  let fixture: ComponentFixture<ServiceUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceUsersComponent]
    });
    fixture = TestBed.createComponent(ServiceUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
