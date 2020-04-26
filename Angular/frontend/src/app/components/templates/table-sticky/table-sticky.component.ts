import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableStickyDataSource } from './table-sticky-datasource';

@Component({
  selector: 'app-table-sticky',
  templateUrl: './table-sticky.component.html',
  styleUrls: ['./table-sticky.component.css']
})
export class TableStickyComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  dataSource: TableStickyDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  @Input() stickyColumns = ['position', 'name', 'weight'];
  displayedColumns = [];
  sticky;

  ngOnInit() {
    this.dataSource = new TableStickyDataSource();
    this.displayedColumns = Object.keys(this.dataSource.data[0]);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
