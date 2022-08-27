import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url: string = "http://localhost"
  constructor() { }
}
