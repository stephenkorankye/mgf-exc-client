import { Component , OnInit } from '@angular/core';
import { ContactForm } from 'src/app/models/contact.model';
import { CompaniesService } from 'src/app/services/companies.service';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})

export class AddContactComponent implements OnInit {

  contact : ContactForm = {
    id : undefined , 
    firstname : "" , 
    lastname : "" , 
    email : "" , 
    company : "" 
  }
  companies? : any[] ; 

  submitted = false ; 
  errors : Array<string> = [] ; 

  constructor(private contactsService : ContactsService , private companiesService : CompaniesService) {} 

  ngOnInit(): void {
    this.getCompanies() ; 
  }


  // gettincompanies
  getCompanies(): void {
    this.companiesService.getAll()
      .subscribe({
        next : (data) => {
          this.companies = data.data ;
          console.log ( data.data ) 
        } , 
        error : (e) => console.error(e) 
      })
  }

  saveContact(): void {
    this.errors = [] ; 
    let { firstname , lastname , email , company } = this.contact ; 

    // check for empty fields 
    if (!firstname) 
      this.errors.push("Firstname is required") ; 
    if (!lastname) 
      this.errors.push("Lastname is required") ; 
    if (!email) 
      this.errors.push("email is required") ; 
    if (!company)
      this.errors.push("Company is required"); 

    if ( this.errors.length > 0 ) {
      console.log ( this.errors ) ; 
      return ; 
    }
    
    
    const data = {
      firstname , 
      lastname , 
      email , 
      company, 
    }

    console.log ( data ); 

    // submit contact data 
    this.contactsService.create(data) 
      .subscribe({
        next : (res) => {
          console.log ( res ) ; 
          this.submitted = true 
        }, 
        error : (e) => console.error ( e )  
      }); 

  }

  // clear input fields 
  newContact(): void {
    this.errors = [] ; 
    this.contact = {
      id : undefined , 
      firstname : "" , 
      lastname : "" , 
      email : "" , 
      company : ""  
    }
  }


}
