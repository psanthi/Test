import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit {
  @Input() options: any;
  @Input() filter: boolean = true;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  selectedItems!: { label: string; value: string; }[];
  dropdownSettings!: IDropdownSettings;
  i: number = 0;
  ngOnInit() {
    this.i = 0
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'label',
      textField: 'value',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableCheckAll: false,
      itemsShowLimit: 2,
      maxHeight: 120,
      closeDropDownOnSelection: true,
      allowSearchFilter: this.filter
    };
  }
  onItemSelect(item: any) {
    this.onChange.emit(item);
    this.selectedItems.push(item)
    console.log(this.selectedItems, 'selectedItems');
  }
  onDropDownClose() {
    console.log('qwertyu')
    // this.onChange.emit(this.selectedItems);
  }
  constructor() { }

}
