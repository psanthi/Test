import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-drop-down',
  templateUrl: './custom-drop-down.component.html',
  styleUrls: ['./custom-drop-down.component.css']
})
export class CustomDropDownComponent {
  @Input() options: any;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Input() filter = true;
  duplicateData!: { label: string; value: string; }[];
  expand = false;
  fieldValue = '';
  ngOninit() {
    this.duplicateData = this.options;
  }
  toggle(event: any) {
    this.fieldValue = '';
    this.expand = !this.expand;
    this.duplicateData = this.options;
  }
  fieldChange(value: any) {
    let val = value.target.value;
    console.log(this.fieldValue);
    this.duplicateData = [];
    for (let i = 0; i < this.options.length; i++) {
          if((this.options[i].value.toLowerCase()).indexOf(val.toLowerCase())> -1) {
      console.log(val);
      this.duplicateData.push(this.options[i]);
        }
      }
    if (this.duplicateData.length == 0) {
      console.log('no data')
      this.duplicateData.push({ label: '', value: 'No Data Found' });
    }
  }
  selectedItem(id: any) {
      console.log(id);
    // this.expand = false;
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i].label == id) {
        this.fieldValue = this.options[i].value
        this.onChange.emit(this.options[i]);
        console.log(this.options[i])
      }
    }
  }
}

