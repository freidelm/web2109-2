import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TemplateComponent } from './template/template.component';
import {SharedModule} from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AutoresService } from './services/autores.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [AutoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
