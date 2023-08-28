import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent {
  @Output() filterChanged = new EventEmitter<string>();
  @Output() columnChanged = new EventEmitter<string>(); 
  searchQuery: string = '';
  selectedColumnName: string = ''; 


  filterContacts(): void {
    this.filterChanged.emit(this.searchQuery);
  }
  onColumnChanged(): void {
    this.columnChanged.emit(this.selectedColumnName); 
  }
}
