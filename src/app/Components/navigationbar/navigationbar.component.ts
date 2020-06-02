import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent implements OnInit {

  constructor() { }
  // isSticky: boolean = false;
  // @HostListener('window:scroll', ['$event'])
  // checkScroll() {
  //   this.isSticky = window.pageYOffset >= 250;
  // }

ngOnInit(): void {}

toHome(){
   document.getElementById('home').scrollIntoView({behavior : "smooth"});
}
toAbout(){
  document.getElementById('head').scrollIntoView({behavior : "smooth"});
}
toWork(){
  document.getElementById('project').scrollIntoView({behavior : "smooth"});
}
toContact(){
  document.getElementById('contact').scrollIntoView({behavior : "smooth"});
}

}
