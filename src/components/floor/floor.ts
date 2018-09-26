import { Component, Input } from '@angular/core';
import { IndexProvider } from './../../providers/index/index';

/**
 * Generated class for the FloorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'floor',
  templateUrl: 'floor.html'
})
export class FloorComponent {
  text: string;
  @Input() floorData:any;
  floor_0: any;
  floor_1: any;
  floor_2: any;
  @Input() floorTitle: any;
  @Input() floorNum: number;
  constructor(public indexProvider: IndexProvider) {
    console.log('Hello FloorComponent Component');
    this.text = 'Hello World';
    this.floor_0 = this.floorData[0]
    this.floor_1 = this.floorData[1]
    this.floor_2 = this.floorData[2]
  }

}
