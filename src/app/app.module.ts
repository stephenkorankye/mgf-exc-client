import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ViewContactsComponent } from './components/view-contacts/view-contacts.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { SortIconComponent } from './components/sort-icon/sort-icon.component';
import { FilterTableComponent } from './components/filter-table/filter-table.component';
import { SingleContactComponent } from './components/single-contact/single-contact.component';
import { ViewReportComponent } from './components/view-report/view-report.component';


@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ContactDetailsComponent,
    ViewContactsComponent,
    SortIconComponent,
    FilterTableComponent,
    SingleContactComponent,
    ViewReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
