import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//components
import { ShowDataInTableComponent } from './show-data-in-table/show-data-in-table.component';
import { ShowRowDetailsComponent } from './show-row-details/show-row-details.component';
//Pipe
import { SearchEmpNamePipe } from './pipe/search-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShowDataInTableComponent,
    ShowRowDetailsComponent,
    SearchEmpNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
