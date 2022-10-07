import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrDirectComponent } from './attr-direct.component';

describe('AttrDirectComponent', () => {
  let component: AttrDirectComponent;
  let fixture: ComponentFixture<AttrDirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttrDirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
