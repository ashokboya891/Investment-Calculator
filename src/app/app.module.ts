import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultComponent } from './investment-result/investment-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserInputModule } from './user-input/user.Input.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InvestmentResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
