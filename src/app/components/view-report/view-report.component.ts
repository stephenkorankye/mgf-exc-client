import { Component , OnInit } from '@angular/core';
import { Contact, ContactForm } from 'src/app/models/contact.model';
import { CompaniesService } from 'src/app/services/companies.service';
import { ContactsService } from 'src/app/services/contacts.service'
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {
  companies?: any ;
  allCompanies?: Contact[] ; 
  currentPage = 1 ; 
  totalPages = 1 ; 
  perPage = 10 ; 
  sortBy : string | null = null ; 
  sortDirection : "asc" | "desc" = "asc" ; 
  searchcolumn = ""
  searchQuery = "" 
  loading = false ; 

  constructor(private excelService: ExcelService, private companiesService: CompaniesService ) {} 
  
  ngOnInit(): void {
    this.loading = true ; 
    this.getCompanies() ; 
  }

  // fetch contacts 
  getCompanies(): void {
    this.companiesService.getAll()  
      .subscribe({
        next : (data) => {
          this.loading = false ; 
          this.allCompanies = data.data ; 
          this.companies = data.data ; 

          
        }, 
        error :(e) => {
          console.error(e) ;
          this.loading = false ;  
        }
      }); 
  }

  toExcel() : void {
    this.excelService.exportToExcel(this.companies , "data.xlsx")
  }




}
