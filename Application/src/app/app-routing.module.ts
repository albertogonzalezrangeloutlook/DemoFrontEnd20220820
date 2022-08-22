import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';


import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SearchComponent } from "./search/search.component";
import { DetailComponent } from "./detail/detail.component";
import { AnaliticComponent } from "./analitic/analitic.component";
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "search", component: SearchComponent },
  { path: "detail", component: DetailComponent },
  { path: "analitic", component: AnaliticComponent },
  { path: "home", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }


