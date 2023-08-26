import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageGeneratorModule } from './Component/PageGenerator/PageGenerator.module';
import { AutoPageGeneratorModule } from './Component/AutoPageGenerator/AutoPageGenerator.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PageGeneratorModule,
    AutoPageGeneratorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
