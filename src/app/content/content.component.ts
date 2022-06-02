import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, HostListener, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  public onWindowScroll($event: any): void {
    const scrollTop = $event.target['scrollingElement'].scrollTop;
    const navbar = document.getElementById('navbar');
    
    if (scrollTop > 60) {
      navbar?.classList.add('dark')
    } else {
      navbar?.classList.remove('dark')
    }
    
  }

  loading = true;
  // contactRouting = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    // console.log('init');
    
    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd)) {
    //       return;
    //   }
    //   if (evt.url === '/content/contact') {
    //     this.contactRouting = true;
    //     console.log('changed------------');
        
    //   } else {
    //     this.contactRouting = false;
    //   }
    // });
    setTimeout(()=>{this.loading = false},1000);
  }

  // onClick(nav: boolean = false): void {
  //   if (nav) {
  //     this.contactRouting = true; 
  //     setTimeout(()=>{this.loading = false},1000);
  //   }
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('onchanged');
  // }

  // ngDoCheck(): void {
  //   console.log('docheck');
    
  // }

  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit');
    
  // }

  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked')
  // }

  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit')
  // }

  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked')
  // }



}
