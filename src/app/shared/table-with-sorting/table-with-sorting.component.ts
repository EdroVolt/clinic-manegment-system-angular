import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  OnChanges,
  SimpleChanges,
  Input,
} from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-with-sorting',
  templateUrl: './table-with-sorting.component.html',
  styleUrls: ['./table-with-sorting.component.scss'],
})
export class TableWithSortingComponent implements OnInit, OnChanges {
  @Input() ELEMENT_DATA: {}[] = [];
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  hiddenColumns = ['_id', 'password', '__v', 'paymentDetails']

  ngOnInit(): void { }

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('table rerender');

    this.displayedColumns = Object.keys(this.ELEMENT_DATA[0])
      .filter(column => !this.hiddenColumns.includes(column));

    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
