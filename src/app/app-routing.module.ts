import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ViewContactsComponent } from './components/view-contacts/view-contacts.component';

const routes: Routes = [
  { path : "" , redirectTo : "contacts", pathMatch: "full"} , 
  { path: "contacts", component : ViewContactsComponent } ,
  { path : "add", component : AddContactComponent } ,  
  { path : "contacts/:id", component : ContactDetailsComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
