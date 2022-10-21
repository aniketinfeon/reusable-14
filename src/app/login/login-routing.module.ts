import { NestedFormComponent } from './component/nested-form/nested-form.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './component/sign-up/sign-up.component';

const routes: Routes = [
  { path:"login",component: SignInComponent },
  { path:"signUp", component: SignUpComponent},
  { path:"nested", component: NestedFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
