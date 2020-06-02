import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-head-component',
  templateUrl: './head-component.component.html',
  styleUrls: ['./head-component.component.scss']
})
export class HeadComponentComponent implements OnInit {

  public isLoading :boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
