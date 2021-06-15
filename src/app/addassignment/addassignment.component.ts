import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import axios from "axios";

@Component({
  selector: 'app-addassignment',
  templateUrl: './addassignment.component.html',
  styleUrls: ['./addassignment.component.css']
})
export class AddassignmentComponent implements OnInit {

  assignNo: string ="";
  assignQues : string ="";
  assignMarks : string ="";
  description: string ="";
  constructor() { }

  ngOnInit(): void {
  }

  addAssignment():void{
    axios.post('http://localhost:3000/teacher/addassignment', {
    number: this.assignNo,
    question: this.assignQues,
    detail:this.description,
    marks:this.assignMarks

  })
  .then(function (response:any) {
    console.log(response);
  })
  .catch(function (error:any) {
    console.log(error);
  });
  }

}
