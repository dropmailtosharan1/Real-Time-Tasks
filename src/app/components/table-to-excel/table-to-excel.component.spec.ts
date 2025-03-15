import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableToExcelComponent } from './table-to-excel.component';

describe('TableToExcelComponent', () => {
  let component: TableToExcelComponent;
  let fixture: ComponentFixture<TableToExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableToExcelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableToExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
