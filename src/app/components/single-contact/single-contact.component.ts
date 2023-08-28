import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.css']
})
export class SingleContactComponent implements OnInit {

  contact?: any ; 
  staticContact?: any ; 
  contactId = "" ; 
  submitted = false ; 
  errors : Array<string> = [] ; 

  constructor(private contactsService : ContactsService , private route: ActivatedRoute , private router: Router ) {}
  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.contactId = params['id'] ; 
      this.getContact(params['id']) ;
    })
     
  }

  getContact(id : any ): void {
    this.contactsService.get(id)
      .subscribe({
        next : (data) => {
          if ( !data.data ) {
            this.router.navigate(["/contacts"])
          }
          this.contact = data.data ; 
          this.staticContact = JSON.parse(JSON.stringify(data.data)) ;  
          console.log ( data ) ; 
        } , 
        error : (e) => console.error(e) 
      })
  }

  updateContact(): void {
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

    this.contactsService.update(this.contactId , data)
      .subscribe({
        next : (res) => {
          console.log ( res ) ; 
          this.submitted = true ; 
        }
      })


  }

}