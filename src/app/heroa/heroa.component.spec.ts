import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroaComponent } from './heroa.component';

describe('HeroaComponent', () => {
  let component: HeroaComponent;
  let fixture: ComponentFixture<HeroaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
