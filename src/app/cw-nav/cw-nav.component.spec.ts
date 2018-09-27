
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CwNavComponent } from './cw-nav.component';

describe('CwNavComponent', () => {
  let component: CwNavComponent;
  let fixture: ComponentFixture<CwNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [CwNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CwNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
