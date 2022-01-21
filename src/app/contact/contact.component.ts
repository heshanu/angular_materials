import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Person{
  fname:string;
  lname:string;
  address1:string;
  address2:string;
  city:string;
  postal:string;
  state:string

}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  p:Person[]=[
    {fname:'Heshan',lname:'Umayanga',address1:'hikka',address2:'gona',state:'southern',city:'hik',postal:'80230'},
    {fname:'Heshan1',lname:'Umayanga1',address1:'hikka1',address2:'gona1',state:'southern1',city:'hik1',postal:'802301'},
    {fname:'Heshan2',lname:'Umayanga2',address1:'hikka2',address2:'gona2',state:'southern2',city:'hik2',postal:'802302'},
    {fname:'Heshan3',lname:'Umayanga3',address1:'hikka3',address2:'gona3',state:'southern3',city:'hik3',postal:'802302'},
  ]
  constructor() { }

  sub():void{

  }  
  ngOnInit(): void {
  }

}
