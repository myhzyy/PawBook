import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notifcations } from './notifcations';

describe('Notifcations', () => {
  let component: Notifcations;
  let fixture: ComponentFixture<Notifcations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notifcations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notifcations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
