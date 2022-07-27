import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlagComponent } from './flag/flag.component';
import { BlueComponent } from './blue/blue.component';
import { WhiteComponent } from './white/white.component';
import { RedComponent } from './red/red.component';
import { FormsModule } from '@angular/forms';
import { ColorComponent } from './color/color.component';
import { ImcComponent } from './imc/imc.component';

@NgModule({
  declarations: [
    AppComponent,
    FlagComponent,
    BlueComponent,
    WhiteComponent,
    RedComponent,
    ColorComponent,
    ImcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
