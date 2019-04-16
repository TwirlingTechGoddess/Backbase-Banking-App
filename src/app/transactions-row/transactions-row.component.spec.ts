import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsRowComponent } from './transactions-row.component';

describe('TransactionsRowComponent', () => {
  let component: TransactionsRowComponent;
  let fixture: ComponentFixture<TransactionsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
