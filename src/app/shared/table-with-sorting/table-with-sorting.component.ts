import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  OnChanges,
  SimpleChanges,
  Input,
  Output,
  EventEmitter,
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
  @Output() delete: EventEmitter<string> = new EventEmitter();
  @Output() edit: EventEmitter<string> = new EventEmitter();

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  hiddenColumns = ['_id', 'password', '__v', 'paymentDetails']
  btnColumns = ["delete", "edit"];

  innerDataSource = new MatTableDataSource(this.ELEMENT_DATA);
  innerColumns: string[] = [];

  ngOnInit(): void { }

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('table rerender');

    this.displayedColumns = Object.keys(this.ELEMENT_DATA[0])
      .filter(column => !this.hiddenColumns.includes(column));

    this.displayedColumns.push("delete", "edit");

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

  renderInnerTable(data: any) {
    // console.log(data);

    this.innerDataSource = new MatTableDataSource([data]);
    // console.log(this.innerDataSource);

    this.innerColumns = Object.keys(data).filter(column => !this.hiddenColumns.includes(column));
    // console.log(this.innerColumns);
  }

  onDelete(_id: string) {
    console.log(_id);
    this.delete.emit(_id);
  }

  onEdit(_id: string) {
    console.log(_id);
    this.edit.emit(_id);
  }

}
