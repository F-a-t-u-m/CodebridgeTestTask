import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightPipe } from './pipes/highlight.pipe';
import { NgPipesModule } from 'ngx-pipes';
import { ArticleComponent } from './home/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HighlightPipe,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    FormsModule
  ],
  providers: [HighlightPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
