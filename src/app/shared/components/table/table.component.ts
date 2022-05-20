import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { IColumns } from '../../interfaces/i-columns';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnChanges {
  @Input() dataSource: Array<any>;
  @Input() columnsDisplay: Array<IColumns>;
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
      console.log(`TableComponent -> ngOnChanges -> this.dataSource`, this.dataSource);
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.source.filter = filterValue.trim().toLowerCase();

    if (this.source.paginator) {
      this.source.paginator.firstPage();
    }
  }
}
