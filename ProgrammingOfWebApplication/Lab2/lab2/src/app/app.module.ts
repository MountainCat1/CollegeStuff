import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CssGeneratorComponent} from './css-generator/css-generator.component';
import {CssInputComponent} from './css-input/css-input.component';
import {CssOutputComponent} from './css-output/css-output.component';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from '@angular/forms';
import { CssVisualisationComponent } from './css-visualisation/css-visualisation.component';

@NgModule({
  declarations: [
    AppComponent,
    CssGeneratorComponent,
    CssInputComponent,
    CssOutputComponent,
    CssVisualisationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
