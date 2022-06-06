import { Component, OnInit } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    replyto: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    message: new FormControl('', [Validators.required])
  });

  constructor(
    private http: HttpClient,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  
  submit() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/f/xrgjjvak',
      { name: this.contactForm.controls['name'].value, 
        replyto: this.contactForm.controls['replyto'].value, 
        message: this.contactForm.controls['message'].value },
      { 'headers': headers }).subscribe(
        response => {
          this.openSnackBar();
        }
      );
  }  

  openSnackBar(): void {
    this.snackBar.open('Thank you !!!', 'confirm', {
      duration: 2000
    });
    this.contactForm.reset();
  }

}
