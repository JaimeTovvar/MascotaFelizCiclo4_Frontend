import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomImgPipe } from './dom-img.pipe';



@NgModule({
  declarations: [DomImgPipe],
  imports: [
    CommonModule
  ],
  exports: [
    DomImgPipe
  ]
})
export class PipesModule { }
