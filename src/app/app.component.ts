import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TemplateRef, ViewChild} from '@angular/core';
import {MatBottomSheet, MatBottomSheetConfig} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-mateial';
  search1=new FormControl();

  @ViewChild(TemplateRef)
  template!: TemplateRef<any>;

  constructor(readonly bottomSheet: MatBottomSheet) {}

  open(config?: MatBottomSheetConfig) {
    return this.bottomSheet.open(this.template, config);
  }
  search():void{  
    alert(this.search1.value);
  }

  ngOnInit(): void {
    
  }
}
