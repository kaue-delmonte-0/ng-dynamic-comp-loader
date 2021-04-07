import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyButtonComponent } from './components/my-button.component';
import { MyInputComponent } from './components/my-input.component';
import { MyLogoComponent } from './components/my-logo.component';

import { DynamicComponentDirective } from './directives/dynamic-component.directive';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponentDirective,
    MyButtonComponent,
    MyInputComponent,
    MyLogoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
