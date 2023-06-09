// System Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingSystemComponent } from './components/rating-system/rating-system.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { InstructorReviewInputComponent } from './components/instructor-review-input/instructor-review-input.component';
import { InstructorReviewDisplayComponent } from './components/instructor-review-display/instructor-review-display.component';
import { InstructorReviewComponent } from './components/instructor-review/instructor-review.component';
import { TopTagsComponent } from './components/top-tags/top-tags.component';
import { ProfessorDetailComponent } from './components/professor-detail/professor-detail.component';
import { InstructorCardComponent } from './components/instructor-card/instructor-card.component';
import { InstructorProfileComponent } from './components/instructor-profile/instructor-profile.component';
import { RatingBarComponent } from './components/rating-bar/rating-bar.component';
import { InstructorsListPageComponent } from './pages/instructors-list-page/instructors-list-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommentSectionComponent } from './components/comment-section/comment-section.component';
import { HomeComponent } from './components/home/home.component';

// Angular material stuff
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

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { ViewCommentComponent } from './components/view-comment/view-comment.component';

@NgModule({
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,

    // Angular material
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatChipsModule,

    MatRadioModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,

    MatTableModule,
    MatDialogModule,
    MatSidenavModule,
    MatTabsModule,
  ],
  declarations: [
    AppComponent,
    SignupComponent,
    RatingSystemComponent,
    LoginComponent,
    NavBarComponent,
    InstructorReviewDisplayComponent,
    InstructorReviewInputComponent,
    TopTagsComponent,
    ProfessorDetailComponent,
    InstructorReviewComponent,
    InstructorCardComponent,
    InstructorProfileComponent,
    RatingBarComponent,

    InstructorsListPageComponent,
    CommentSectionComponent,

    HomeComponent,

    UserProfileComponent,
    ViewCommentComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [InstructorReviewInputComponent],
})
export class AppModule {}