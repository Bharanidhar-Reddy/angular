import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerodComponent } from './herod.component';

describe('HerodComponent', () => {
  let component: HerodComponent;
  let fixture: ComponentFixture<HerodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
