
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CwDashboardComponent } from './cw-dashboard.component';

describe('CwDashboardComponent', () => {
  let component: CwDashboardComponent;
  let fixture: ComponentFixture<CwDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CwDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
