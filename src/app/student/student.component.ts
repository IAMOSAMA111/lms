import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  private message:string;

  constructor(private router:Router) {
    this.message='Hello'
   }

  ngOnInit(): void {
  }

  login():void{
    this.router.navigateByUrl('student')
  }
 

}
