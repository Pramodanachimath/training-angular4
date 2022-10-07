import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseparentComponent } from './courseparent.component';

describe('CourseparentComponent', () => {
  let component: CourseparentComponent;
  let fixture: ComponentFixture<CourseparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
