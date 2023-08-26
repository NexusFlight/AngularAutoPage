import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageGeneratorComponent } from './PageGenerator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PageGeneratorComponent],
  exports: [PageGeneratorComponent]
})
export class PageGeneratorModule { }
