import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRowDetailsComponent } from './show-row-details.component';

describe('ShowRowDetailsComponent', () => {
  let component: ShowRowDetailsComponent;
  let fixture: ComponentFixture<ShowRowDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRowDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
