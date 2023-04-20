import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-instructor-review-display',
  templateUrl: './instructor-review-display.component.html',
  styleUrls: ['./instructor-review-display.component.css'],
})
export class InstructorReviewDisplayComponent {
  @Input() rating!: any;

  constructor(public dialog: MatDialog, private tokenService: TokenService) {}

  loggedInUser: any

  ngOnInit(){
    this.loggedInUser = this.tokenService.getUserData();
    console.log(this.loggedInUser);
  }



}