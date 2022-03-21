import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor() { }
  showMe1:boolean=true;
  showMe2:boolean=false;
  showMe3:boolean=false;
  ngOnInit(): void {
  }
  
  toggle1(){
    this.showMe1=!this.showMe1;
  }
  toggle2(){
    this.showMe2=!this.showMe2;
  }
  toggle3(){
    this.showMe3=!this.showMe3;
  }
}
