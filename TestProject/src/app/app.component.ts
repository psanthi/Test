import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  custom: boolean = false;
  multi: boolean = false;
  countries: { label: string; value: string; }[] | undefined;
  selectedItems: any = [];
  applyFilter = true;
  summ: boolean = false;
  ngOnInit() {
    this.selectedItems = [];
    this.countries = [
      { label: 'In', value: 'India' },
      { label: 'Fr', value: 'France' },
      { label: 'Gr', value: 'Germany' },
      { label: 'Ru', value: 'Russia' },
      { label: 'Pl', value: 'Poland' }
    ];
  }
  onChange(val: any) {
    if (this.multi) {
      this.selectedItems.push(val);
      this.summ = (this.selectedItems.length > 1) ? false : true;
      console.log(this.selectedItems.length)
    } else if (this.custom) {
      this.selectedItems = [];
      this.selectedItems.push(val);
      this.summ = false;
    }
    this.selectedItems = this.selectedItems[this.selectedItems.length - 1]
    console.log(this.selectedItems, 'appSelectedItems')
  }
  nextView(type: string) {
    this.summ = true;
    this.selectedItems = [];
    switch (type) {
      case 'custom':
        this.custom = true;
        this.multi = false;
        break;
      case 'multi':
        this.custom = false;
        this.multi = true;
        break;
    }
  }
}
