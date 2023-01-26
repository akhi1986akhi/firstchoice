import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyFirstChoiceComponent } from './why-first-choice.component';

describe('WhyFirstChoiceComponent', () => {
  let component: WhyFirstChoiceComponent;
  let fixture: ComponentFixture<WhyFirstChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyFirstChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyFirstChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
