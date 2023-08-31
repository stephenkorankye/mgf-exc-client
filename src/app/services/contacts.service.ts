import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact, ContactForm } from '../models/contact.model';
import { BASE_URL } from '../../../URL';


const ENDPOINT = BASE_URL + 'contacts';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  // fetch contacts
  getAll(): Observable<any> {
    return this.http.get<Contact[]>(`${ENDPOINT}`);
  }

  // fetch a single contact 
  get(id: any): Observable<any> {
    return this.http.get<Contact>(`${ENDPOINT}/${id}`);
  }

  // post new contact to server 
  create(data: any): Observable<ContactForm> {
    return this.http.post(ENDPOINT, data);
  }

  // edit a contact 
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${ENDPOINT}/${id}`, data);
  }

  // soft delete contact 
  delete(id: any): Observable<any> {
    return this.http.delete(`${ENDPOINT}/${id}`);
  }  

}
