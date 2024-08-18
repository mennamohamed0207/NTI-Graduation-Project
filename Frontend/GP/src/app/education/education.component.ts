import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  public college="Faculy of Engineering";
  public degree="Bachelor Degree";
  public fromDate="Sep.2020";
  public toDate="Jun.2025";
  public university="Cairo University";
  public department ="Computer Engineering Department"
  public totalPercent="88%"
}
