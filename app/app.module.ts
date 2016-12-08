import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

import { CalculatorComponent }  from './Components/Calculator.Component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CalculatorComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
