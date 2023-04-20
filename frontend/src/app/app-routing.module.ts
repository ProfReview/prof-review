import { InstructorProfileComponent } from './components/instructor-profile/instructor-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorReviewInputComponent } from './components/instructor-review-input/instructor-review-input.component';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { InstructorsListPageComponent } from './pages/instructors-list-page/instructors-list-page.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rate/:instructorId', component: InstructorReviewInputComponent },
  { path: 'instructors/:instructorId', component: InstructorProfileComponent },
  { path: 'instructors', component: InstructorsListPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}