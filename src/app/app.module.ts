import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AdminComponent } from './admin/admin.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { ViewteachersComponent } from './viewteachers/viewteachers.component';
import { AddassignmentComponent } from './addassignment/addassignment.component';
import { ViewassinmentComponent } from './viewassinment/viewassinment.component';
import { AddmaterialComponent } from './addmaterial/addmaterial.component';
import { ViewmaterialComponent } from './viewmaterial/viewmaterial.component';
import { CategoryComponent } from './category/category.component';
import { ViewAssignStuComponent } from './view-assign-stu/view-assign-stu.component';
import { ViewMaterialStuComponent } from './view-material-stu/view-material-stu.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    AdminComponent,
    AddstudentComponent,
    AddteacherComponent,
    ViewstudentComponent,
    ViewteachersComponent,
    AddassignmentComponent,
    ViewassinmentComponent,
    AddmaterialComponent,
    ViewmaterialComponent,
    CategoryComponent,
   
    ViewAssignStuComponent,
    ViewMaterialStuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
