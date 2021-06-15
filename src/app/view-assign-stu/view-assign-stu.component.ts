import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-view-assign-stu',
  templateUrl: './view-assign-stu.component.html',
  styleUrls: ['./view-assign-stu.component.css']
})
export class ViewAssignStuComponent implements OnInit {
  assignments : Record<string,any>[]=[];
  constructor() { }

  
  ngOnInit(): void {
    this.fetchAssignments();
  }

  async fetchAssignments(){
    let response = await axios.get("http://localhost:3000/teacher/assignments");
    this.assignments = response.data;
  }

}
