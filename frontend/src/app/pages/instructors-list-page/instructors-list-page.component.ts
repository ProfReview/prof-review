import { Component } from '@angular/core';
import { InstructorService } from 'src/app/services/instructor/instructor.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-instructors-list-page',
  templateUrl: './instructors-list-page.component.html',
  styleUrls: ['./instructors-list-page.component.css'],
})
export class InstructorsListPageComponent implements OnInit {
  constructor(private instructorService: InstructorService) {}
  allInstructors!: any
  ngOnInit() {
    this.instructorService
      .getInstructors()
      .subscribe((instructors) => (this.allInstructors = instructors));
  }

  departments = [
    'Software Engineering',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Chemical Engineering',
  ];

  filterDepartment = '';
  filterCourse = '';
}
