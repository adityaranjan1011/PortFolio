import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
 download(){
  // console.log("File downloaded");
  const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', 'assets/Aditya_CV.pdf');
        link.setAttribute('download', 'Aditya_CV.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
}

}
