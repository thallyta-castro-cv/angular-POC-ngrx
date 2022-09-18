import { SharedModule } from './../shared/shared.module';
import { PersonComponent } from './person/person.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PersonComponent
  ]
})
export class FeaturesModule { }
