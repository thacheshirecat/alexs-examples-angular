import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostTestModalComponent } from './ghost-test-modal.component';

describe('GhostTestModalComponent', () => {
  let component: GhostTestModalComponent;
  let fixture: ComponentFixture<GhostTestModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhostTestModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostTestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
