import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-view-material-stu',
  templateUrl: './view-material-stu.component.html',
  styleUrls: ['./view-material-stu.component.css']
})
export class ViewMaterialStuComponent implements OnInit {
  materials : Record<string,any>[]=[];
  constructor() { }

  ngOnInit(): void {
    this.fetchMaterials();
  }

  async fetchMaterials(){
    let response = await axios.get("http://localhost:3000/teacher/material");
    this.materials = response.data;
  }

}
