import { Component, OnInit } from '@angular/core';
//import { ContactComponent} from "../contact/contact.component"
import { RouterModule } from '@angular/router';

export interface Person{
  fname:string;lname:string;address1:string;address2:string;city:string;postal:string;state:string

}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent  implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
