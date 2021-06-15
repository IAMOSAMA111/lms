import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-viewmaterial',
  templateUrl: './viewmaterial.component.html',
  styleUrls: ['./viewmaterial.component.css']
})
export class ViewmaterialComponent implements OnInit {
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
