import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Commentervice } from 'src/app/services/comment/comment.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.css'],
})
export class ViewCommentComponent {
  constructor(public dialog: MatDialog, private tokenService: TokenService) {}

  @Input() comment: any;
  loggedInUser: any;

  ngOnInit() {
    this.loggedInUser = this.tokenService.getUserData();
  }


}