import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoneComponent } from './directone.component';

describe('DirectoneComponent', () => {
  let component: DirectoneComponent;
  let fixture: ComponentFixture<DirectoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
