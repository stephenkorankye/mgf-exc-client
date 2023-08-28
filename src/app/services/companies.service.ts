import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact, ContactForm } from '../models/contact.model';
import { BASE_URL } from '../util/URL';


const ENDPOINT = BASE_URL + 'companies';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  // fetch companies
  getAll(): Observable<any> {
    return this.http.get<Contact[]>(`${ENDPOINT}`);
  }

  // fetch a single contacts in specific company 
  get(id: any): Observable<any> {
    return this.http.get<Contact>(`${ENDPOINT}/${id}`);
  }

 

}
