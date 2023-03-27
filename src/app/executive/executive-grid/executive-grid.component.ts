import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-executive-grid',
  templateUrl: './executive-grid.component.html',
  styleUrls: ['./executive-grid.component.scss'],
})
export class ExecutiveGridComponent implements OnInit {
  columnDefs: ColDef[] = [
    { field: 'make', width: 300 },
    { field: 'model', width: 250 },
    { field: 'price', width: 250 },
  ];
  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  rowData$!: Observable<any[]>;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http.get<any[]>(
      'https://www.ag-grid.com/example-assets/row-data.json'
    );
  }

  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
}
