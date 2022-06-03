import { Component, OnInit } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl(''),
    subject: new FormControl(''),
    replyto: new FormControl(''),
    message: new FormControl('')
  });

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  
  submit() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/f/xrgjjvak',
      { name: 'name', subject: 'subject', replyto: 'email', message: 'message' },
      { 'headers': headers }).subscribe(
        response => {
          console.log(response);
        }
      );
  }  

}
