import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-addmaterial',
  templateUrl: './addmaterial.component.html',
  styleUrls: ['./addmaterial.component.css']
})
export class AddmaterialComponent implements OnInit {

  subject: string ="";
  title : string ="";
  description : string ="";
  link: string ="";
  constructor() { }

  ngOnInit(): void {
  }

  addMaterial():void{
    axios.post('http://localhost:3000/teacher/addmaterial', {
    subject: this.subject,
    title:this.title,
    detail:this.description,
    link:this.link,


  })
  .then(function (response:any) {
    console.log(response);
  })
  .catch(function (error:any) {
    console.log(error);
  });
  }

}
