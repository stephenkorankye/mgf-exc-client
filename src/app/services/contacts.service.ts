import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';

const ENDPOINT = 'http://localhost:5000/api/contacts';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<Contact[]>(ENDPOINT);
  }

  get(id: any): Observable<any> {
    return this.http.get<Contact>(`${ENDPOINT}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(ENDPOINT, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${ENDPOINT}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${ENDPOINT}/${id}`);
  }  

}
