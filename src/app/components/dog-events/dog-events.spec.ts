import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogEvents } from './dog-events';

describe('DogEvents', () => {
  let component: DogEvents;
  let fixture: ComponentFixture<DogEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogEvents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogEvents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
