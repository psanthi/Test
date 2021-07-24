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
  selectedItems: any = [] ;
  applyFilter = true;
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
    // this.multi = false;
    console.log(this.selectedItems.filter((b: { label: string; value: string; }) => b.value != val.value), 'app');
    if(this.multi) {
    this.selectedItems.push(val);
    } else if(this.custom){
      this.selectedItems = [];
      this.selectedItems.push(val);
    }
    console.log(this.selectedItems, 'selectedItems')
  }
  nextView(type: string) {
    this.selectedItems = [];
    switch(type) {
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
