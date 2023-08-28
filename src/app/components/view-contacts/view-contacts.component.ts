import { Component , OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.css']
})
export class ViewContactsComponent implements OnInit {

  contacts?: Contact[] ; 
  allContacts?: Contact[] ; 
  currentPage = 1 ; 
  totalPages = 1 ; 
  perPage = 10 ; 
  sortBy : string | null = null ; 
  sortDirection : "asc" | "desc" = "asc" ; 

  constructor(private contactsService : ContactsService ) {} 
  
  ngOnInit(): void {
    this.getContacts() ; 
  }

  // fetch contacts 
  getContacts(): void {
    this.contactsService.getAll()  
      .subscribe({
        next : (data) => {
          this.allContacts = data.data ; 

          // initial data to display 
          this.contacts = data.data.slice(0 , this.perPage); 

          // calculate total pages needed for pagination 
          this.totalPages = Math.ceil(data.data.length / this.perPage)
        }, 
        error : (e) => console.error(e) 
      }); 
  }


  // calculate total pages needed with the total amount data 
  totalPagesArray(): number[] {
    return Array.from({
      length: this.totalPages
    }, (_, index ) => index + 1); 
  }

  // to to a specific page 
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages ) {
      this.currentPage = page ; 

      this.contacts = this.allContacts?.slice((this.currentPage -1 ) * 10 , (this.currentPage ) * 10)
    }
  }


  // sorting the table by column values 
  sortTable ( column: string): void {
    if ( this.sortBy == column ) {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc" ; 
    } else {
      this.sortBy = column ; 
      this.sortDirection = "asc" ; 
    }

    // sorting contacts based on column selected and its direction 
    this.allContacts = this.allContacts?.sort( (a : any , b : any ): any => {
      let aVal , bVal ; 
      if ( column == "company" ) {
        aVal = a.company.name.toString() ; 
        bVal = b.company.name.toString() ; 
      } else {
        aVal = a[column].toString() ; 
        bVal = b[column].toString() ; 
      }
      

      if (!isNaN(aVal) && !isNaN(bVal)) {
        return this.sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      } else {
        
        return this.sortDirection === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }

    })
    this.contacts = this.allContacts?.slice((this.currentPage -1 ) * 10 , (this.currentPage ) * 10) ; 

  }

}
