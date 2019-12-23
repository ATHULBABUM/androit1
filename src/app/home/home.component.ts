import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { IData } from '../add-data/data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  persons: any;

  constructor(
    private router:Router,
    private dataService:DataService
    ) { }

  ngOnInit() {
    console.log("home")
    this.dataService.getDatas()
    .subscribe((data)=>{
      console.log("data", data)
      this.persons = data;
      console.log("persons", this.persons)

      // alert("subscribes");
      // this.persons=JSON.parse(JSON.stringify(data)).persons;
    })
  }
  // persons:IData[];
  // status:string;

}
