import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetUps } from './meet-ups';

describe('MeetUps', () => {
  let component: MeetUps;
  let fixture: ComponentFixture<MeetUps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetUps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetUps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
