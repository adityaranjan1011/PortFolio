import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioHomeComponent } from './Components/portfolio-home/portfolio-home.component';
import { NavigationbarComponent } from './Components/navigationbar/navigationbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module/material-module.module';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { WorkComponent } from './Components/work/work.component';
import { HeadComponentComponent } from './Components/head-component/head-component.component';
import { SkillSetComponent } from './Components/skill-set/skill-set.component';

// const routes: Routes = [
//  {path : 'about', component: NavigationbarComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    PortfolioHomeComponent,
    NavigationbarComponent,
    AboutComponent,
    WorkComponent,
    HeadComponentComponent,
    SkillSetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    // RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
