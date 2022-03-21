import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-contect',
  templateUrl: './contect.component.html',
  styleUrls: ['./contect.component.css']
})
export class ContectComponent implements OnInit {

 
  loginform = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    comment: new FormControl('')
  });

  // onSubmit(){
  
  // }

  // lat: number = 51.673858;
  // lng: number = 7.815982;

  ngOnInit(): void {
   
  }
  
}
