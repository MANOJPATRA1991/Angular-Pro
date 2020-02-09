import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Mail } from './models/mail.interface';

@Injectable()
export class MailService {

  constructor(
    private http: HttpClient
  ) { }

  getFolder(folder: string): Observable<Mail[]> {
    return this.http
      .get(`/api/messages?folder=${folder}`)
      .pipe(
        map((response: Mail[]) => response),
        catchError((error: any) => throwError(error))
      )
  }
}