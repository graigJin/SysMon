import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemnavigationComponent } from './systemnavigation.component';

describe('SystemnavigationComponent', () => {
  let component: SystemnavigationComponent;
  let fixture: ComponentFixture<SystemnavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemnavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemnavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
