import { Component } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  experienceForm!:FormGroup;
  experiences: any;
  fieldOfExperience: any = [];
  private subscription: Subscription | undefined;
  constructor(private dataService: ExperienceService) {}

  loadExperience(): void {
    this.dataService.getExperience().subscribe((data) => {
      this.experiences = data.data;
      this.getKeys();
    });
  }
  getKeys() {
    this.fieldOfExperience = Object.keys(this.experiences[0]);
    this.fieldOfExperience.splice(1, 1); //deleting _id
    this.fieldOfExperience.splice(0, 1); //deleting _id
    this.fieldOfExperience.splice(this.fieldOfExperience.length - 1, 1); //deleting _v
  }

  ngOnInit(): void {
    this.loadExperience();
    this.experienceForm=new FormGroup({
      title: new FormControl(null, [Validators.required]),
      org: new FormControl(null, [Validators.required]),
      fromDate: new FormControl(null, [Validators.required]),
      toDate: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      tools: new FormControl(null, [Validators.required]),
    })
  }
  onSubmit()
  {
    // console.log(this.experienceForm.value);
    // this.dataService.addExperience(this.experienceForm).subscribe();
    // this.loadExperience();
    if (this.experienceForm.valid) {
      this.dataService.addExperience(this.experienceForm).subscribe((newExperience) => {
        // Assuming the API returns the newly added experience
        this.experiences.push(newExperience.experience);
        // this.experienceForm.reset(); // Optional: reset the form after submission
      });
    }
  }
}
