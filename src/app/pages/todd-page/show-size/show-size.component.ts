import { Component } from '@angular/core';

@Component({
  selector: 'app-show-size',
  templateUrl: './show-size.component.html',
  styleUrls: ['./show-size.component.scss']
})
export class ShowSizeComponent {
  sizeText = 0;

  set sizeValue(size: any) {
    console.log('set: ', size);
    this.sizeText = size;
  }

  // get getSizeValue() {
  //   console.log('get size:', this.sizeValue);
  //   return this.sizeText;
  // }
}
