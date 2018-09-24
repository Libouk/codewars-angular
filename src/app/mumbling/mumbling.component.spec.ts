import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MumblingComponent } from './mumbling.component';

describe('MumblingComponent', () => {
  let component: MumblingComponent;
  let fixture: ComponentFixture<MumblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MumblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MumblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
