import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursechildComponent } from './coursechild.component';

describe('CoursechildComponent', () => {
  let component: CoursechildComponent;
  let fixture: ComponentFixture<CoursechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursechildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
