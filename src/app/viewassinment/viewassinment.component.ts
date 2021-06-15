import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-viewassinment',
  templateUrl: './viewassinment.component.html',
  styleUrls: ['./viewassinment.component.css']
})
export class ViewassinmentComponent implements OnInit {
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
