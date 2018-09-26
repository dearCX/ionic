import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { FloorComponent } from './floor/floor';
import { TestComponent } from './test/test';
@NgModule({
	declarations: [
		FloorComponent,
    TestComponent
  ],
	imports: [IonicModule], // 如果需要在自定义组件里面使用ionic组件，需要再次引入IonicModule,不用则不需要
	exports: [
    FloorComponent,
    TestComponent
  ]
})
export class ComponentsModule {}
