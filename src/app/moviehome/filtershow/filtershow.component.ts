import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filtershow.component.html',
})
export class FiltershowComponent {

  @Input("options")
  dataProvider: string[] = [];

  @Input()
  placeHolderLabel: string = "Select Item"

  @Output() selectedItem: EventEmitter<string> = new EventEmitter<string>();

  onChangeCategory(event: any) {
    this.selectedItem.emit(event.value);
  }
}
