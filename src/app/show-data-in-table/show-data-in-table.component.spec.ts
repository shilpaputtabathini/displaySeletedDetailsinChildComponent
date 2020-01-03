import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDataInTableComponent } from './show-data-in-table.component';

describe('ShowDataInTableComponent', () => {
  let component: ShowDataInTableComponent;
  let fixture: ComponentFixture<ShowDataInTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDataInTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDataInTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
