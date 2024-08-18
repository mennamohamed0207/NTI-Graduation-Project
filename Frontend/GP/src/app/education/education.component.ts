import { Component } from '@angular/core';
import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  //Initialize Variables
  public college = "Faculy of Engineering";
  public degree = "Bachelor Degree";
  public fromDate = "Sep.2020";
  public toDate = "Jun.2025";
  public university = "Cairo University";
  public department = "Computer Engineering Department";
  public totalPercent = "88%";
  constructor(private dataService: ExperienceService) { }

  ngOnInit(): void {
    this.dataService.getEducation().subscribe(
      (data) => {
        this.college = data.data[0].college;
        this.degree = data.data[0].degree;
        this.fromDate = data.data[0].fromDate;
        this.toDate = data.data[0].toDate;
        this.university = data.data[0].university;
        this.department = data.data[0].department;
        this.totalPercent = data.data[0].CumulativeGrade;
        console.log(data.data);
      }
    )
  }

}
