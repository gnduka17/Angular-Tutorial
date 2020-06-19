import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorPageComponent } from './tutor-page.component';

describe('TutorPageComponent', () => {
  let component: TutorPageComponent;
  let fixture: ComponentFixture<TutorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
