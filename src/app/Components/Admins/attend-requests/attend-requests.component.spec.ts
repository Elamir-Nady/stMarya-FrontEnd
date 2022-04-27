import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendRequestsComponent } from './attend-requests.component';

describe('AttendRequestsComponent', () => {
  let component: AttendRequestsComponent;
  let fixture: ComponentFixture<AttendRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
