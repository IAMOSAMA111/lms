import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddassignmentComponent } from './addassignment/addassignment.component';
import { AddmaterialComponent } from './addmaterial/addmaterial.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ViewAssignStuComponent } from './view-assign-stu/view-assign-stu.component';
import { ViewMaterialStuComponent } from './view-material-stu/view-material-stu.component';
import { ViewassinmentComponent } from './viewassinment/viewassinment.component';
import { ViewmaterialComponent } from './viewmaterial/viewmaterial.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { ViewteachersComponent } from './viewteachers/viewteachers.component';


const routes: Routes = [
  
  {path:"student",component:StudentComponent},
  {path:"teacher",component:TeacherComponent},
  {path:"admin",component:AdminComponent},
  {path:"addstudent",component:AddstudentComponent},
  {path:"addteacher",component:AddteacherComponent},
  {path:"viewstudent",component:ViewstudentComponent},
  {path:"viewteacher",component:ViewteachersComponent},
  {path:"viewassignment",component:ViewassinmentComponent},
  {path:"addassignment", component:AddassignmentComponent},
  {path:"addmaterial", component:AddmaterialComponent},
  {path:"viewmaterial", component:ViewmaterialComponent},
  {path:"category", component:CategoryComponent},
  {path:"viewassignmentstudent", component:ViewAssignStuComponent},
  {path:"viewmaterialstudent", component:ViewMaterialStuComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
