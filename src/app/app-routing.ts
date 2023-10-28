
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path: '', component:AppComponent},{path: 'login', component:LoginComponent},{path: 'registration', component:HomeComponent},
{path: 'aboutus', component:AboutusComponent},
{path: 'contactus', component:ContactusComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export  const routeComponents=[AppComponent,LoginComponent,HomeComponent,AboutusComponent,ContactusComponent];