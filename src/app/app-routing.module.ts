import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ViewContactsComponent } from './components/view-contacts/view-contacts.component';
import { SingleContactComponent } from './components/single-contact/single-contact.component';
import { ViewReportComponent } from './components/view-report/view-report.component';

const routes: Routes = [
  { path : "" , redirectTo : "contacts", pathMatch: "full"} , 
  { path: "contacts", component : ViewContactsComponent } ,
  { path: "contacts/:id", component: SingleContactComponent  } , 
  { path : "add", component : AddContactComponent } ,  
  { path : "contacts/:id", component : ContactDetailsComponent } , 
  { path : "report" , component: ViewReportComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
