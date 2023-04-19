import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { InstructorReviewComponent } from './components/instructor-review/instructor-review.component';

// Angular-material stuff
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TopTagsComponent } from './components/top-tags/top-tags.component';
import { ProfessorDetailComponent } from './components/professor-detail/professor-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,

    // Angular material
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
  ],
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavBarComponent,
    InstructorReviewComponent,
    TopTagsComponent,
    ProfessorDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}