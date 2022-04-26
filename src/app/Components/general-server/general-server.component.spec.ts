import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralServerComponent } from './general-server.component';

describe('GeneralServerComponent', () => {
  let component: GeneralServerComponent;
  let fixture: ComponentFixture<GeneralServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
