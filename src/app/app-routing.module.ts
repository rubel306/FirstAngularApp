import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent } from './pages/landing/landing.component';
import {AboutComponent } from './pages/about/about.component';
import {SupportComponent } from './pages/support/support.component';
import {ResoursesComponent } from './pages/resourses/resourses.component';
import {PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
	{path: 'landing', component: LandingComponent},
	{path: 'about', component: AboutComponent },
	{path: 'support', component: SupportComponent },
	{path: 'resourses', component: ResoursesComponent },
	{path: '**', component: PageNotFoundComponent },
	{path: '', redirectTo: '/landing', pathMatch: 'full'},
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
