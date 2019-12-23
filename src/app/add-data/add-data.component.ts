import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { from } from 'rxjs';
import {IData} from './data.model';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  newData= new IData(null,null,null,null);
  registerForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router,private dataServices:DataService) { }

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      address:['']
    })
  }

  onSubmit(){
    this.newData.firstName=this.registerForm.get('firstName').value;
    this.newData.lastName=this.registerForm.get('lastName').value;
    this.newData.email=this.registerForm.get('email').value;
    this.newData.address=this.registerForm.get('address').value;

    this.dataServices.addData(this.newData)
    .subscribe((data)=>{
      console.log("mooves to home")
      this.router.navigate(['home']);
    })
  


  }

}
