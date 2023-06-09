import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstructorService } from 'src/app/services/instructor/instructor.service';
import { CommentSectionComponent } from '../comment-section/comment-section.component';

@Component({
  selector: 'app-instructor-profile',
  templateUrl: './instructor-profile.component.html',
  styleUrls: ['./instructor-profile.component.css'],
})
export class InstructorProfileComponent {
  instructor!: any;
  @ViewChild('commentBox') commentBox!: CommentSectionComponent;

  constructor(
    private instructorService: InstructorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const instructorId = params.get('instructorId')!;
      console.log(instructorId);

      this.instructorService
        .getInstructorsById(instructorId)
        .subscribe((data) => {
          this.instructor = data;
          console.log(data);
        });
    });
  }
}