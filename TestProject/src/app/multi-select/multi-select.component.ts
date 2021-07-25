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

  constructor() { }

  ngOnInit() {
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
    // this.onChange.emit(item);
    this.selectedItems.push(item)
    console.log(this.selectedItems, 'selectedItems');
  }
  onDropDownClose() {
    console.log('qwertyu')
    this.onChange.emit(this.selectedItems);
  }
  onItemDeSelect(item: any) {
    console.log(item, 'deSelectedItems');
    this.selectedItems = this.selectedItems.filter((b) => b.value != item.value)
    console.log(this.selectedItems, 'deSelectedItems');
  }
}
