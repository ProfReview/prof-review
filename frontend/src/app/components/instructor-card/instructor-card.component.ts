import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-instructor-card',
  templateUrl: './instructor-card.component.html',
  styleUrls: ['./instructor-card.component.css'],
})
export class InstructorCardComponent {

  constructor() {}
  @Input() instructor!: any;
}
