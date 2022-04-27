import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendRequestComponent } from './attend-request.component';

describe('AttendRequestComponent', () => {
  let component: AttendRequestComponent;
  let fixture: ComponentFixture<AttendRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
