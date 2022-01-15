import { InputComponent } from './input/input.component';
import { FormComponent } from './form/form.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: "side/:firstname/:lastname/:address/:country/:email/:phone", component: SidebarComponent},
   { path: "register", component: RegisterComponent, canActivate:[AuthGuard]},
   { path: "contact", component: InputComponent},
   { path: "", component: RegisterComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
