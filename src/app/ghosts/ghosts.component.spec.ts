import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostsComponent } from './ghosts.component';

describe('GhostsComponent', () => {
  let component: GhostsComponent;
  let fixture: ComponentFixture<GhostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
