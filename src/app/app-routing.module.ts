import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationbarComponent } from './Components/navigationbar/navigationbar.component';


const routes: Routes = [
//   {path:'', redirectTo:'/home',pathMatch:'full'},
//  {path : 'about', component: NavigationbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
