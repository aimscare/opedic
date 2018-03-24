import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MedicioComponent } from './medicio/medicio.component';
import { EyeclComponent } from './eyecl/eyecl.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicioComponent,
    EyeclComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
