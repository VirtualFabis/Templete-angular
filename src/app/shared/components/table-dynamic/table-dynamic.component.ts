import { Component, OnInit, OnChanges, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { IColumns } from '../../interfaces/i-columns';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-table-dynamic',
  templateUrl: './table-dynamic.component.html',
  styleUrls: ['./table-dynamic.component.scss']
})
export class TableDynamicComponent implements OnChanges {
  @Input() dataSource: Array<any>;
  @Input() columnsDisplay: Array<IColumns>;
  @Output() getRowHandler = new EventEmitter();
  @Output() getEdit = new EventEmitter();
  @Output() delegateClick = new EventEmitter();
  @Input() pageSizeOptions: Array<number> = [];
  displayedColumns: Array<IColumns> = [];
  columnsShow: string[];
  source;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnChanges(): void {
    if (this.columnsDisplay !== undefined) {
      this.columnsDisplay.forEach( (element) => {
        this.displayedColumns.push({
          idHeader: element.idHeader,
          columnDef: element.columnDef,
          header: element.header,
          cell: (row, key) => this.getRows(row, key)
        });
      });
      this.columnsShow = this.displayedColumns.map(c => c.columnDef);
    }

    if (this.dataSource !== undefined) {
      this.source = new MatTableDataSource(this.dataSource);
      this.source.paginator = this.paginator;
      this.source.sort = this.sort;
    }
  }

  getRows(row, key) {
    for (const key1 in row) {
      if (key === key1) {
        return row[key1];
      }
    }
  }

  getRow(row: any) {
    this.getRowHandler.emit(row);
  }

  delegeteClick(row, funcion) {
    const obj = {};
    // tslint:disable-next-line: forin
    for (const key in row) {
      if (key !== 'plusActions') {
        obj[key] = row[key];
      }
    }
    this.delegateClick.emit({r: obj, fun: funcion });
  }

  edit(row: any) {
    this.getEdit.emit(row);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.source.filter = filterValue.trim().toLowerCase();

    if (this.source.paginator) {
      this.source.paginator.firstPage();
    }
  }

}
