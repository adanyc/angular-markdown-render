import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // MarkdownModule.forRoot(), // cargar el md local
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
      loader: HttpClient 
    }), // cargar el md remoto directamente usando src
  ],
  providers: [
    // MarkdownService, // ya no es necesario si se carga el md remoto directamente usando src
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
