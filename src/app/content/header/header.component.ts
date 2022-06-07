import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @HostListener('window:scroll', ['$event'])
  // public onWindowScroll($event: any): void {
  //   const about = document.getElementById('about');
  // }

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(): void {
    const navbar = document.querySelector('.navbar__menu');
    navbar?.classList.toggle('active');

  }

}
