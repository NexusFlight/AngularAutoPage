import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoPageGeneratorComponent } from './AutoPageGenerator.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule
  ],
  declarations: [AutoPageGeneratorComponent],
  exports: [AutoPageGeneratorComponent]
})
export class AutoPageGeneratorModule { }
