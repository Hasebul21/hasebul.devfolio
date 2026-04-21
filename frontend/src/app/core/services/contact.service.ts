import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { ContactForm, ContactResponse } from '../models/contact.model';

@Injectable({ providedIn: 'root' })
export class ContactService extends ApiService {

  submitContact(form: ContactForm): Observable<ContactResponse> {
    return this.post<ContactResponse>('/contact', form);
  }
}
