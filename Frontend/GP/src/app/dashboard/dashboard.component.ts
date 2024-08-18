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
  //Forms
  experienceForm!: FormGroup;
  educationForm!: FormGroup;
  //Data
  experiences: any = [];
  educations: any = [];
  //Fields
  fieldOfExperience = ['title', 'org', 'fromDate', 'toDate', 'description', 'tools', 'githubLink'];
  fieldOfEducation = ['college', 'department', 'university', 'degree', 'fromDate', 'toDate', 'cumulativeGrade'];


  private subscription: Subscription | undefined;
  constructor(private dataService: ExperienceService) { }

  loadExperience(): void {
    this.dataService.getExperience().subscribe((data) => {
      if (data) {
        this.experiences = data.data;
        this.getKeys();
      }
      else {
        this.experiences = [];
        this.fieldOfExperience = ['title', 'org', 'fromDate', 'toDate', 'description', 'tools', 'githubLink'];
      }
    });
  }
  loadEducation(): void {
    this.dataService.getEducation().subscribe((data) => {
      if (data) {
        this.educations = data.data;
        this.getKeys_education();
      }
      else {
        this.educations = [];
      }
    });
  }
  getKeys_education() {
    if (this.educations.length > 1) {
      this.fieldOfEducation = Object.keys(this.educations[1]);
      this.fieldOfEducation.splice(0, 1); //deleting _id
      this.fieldOfEducation.splice(this.fieldOfEducation.length - 1, 1); //deleting _v
      // console.log(this.fieldOfEducation);
    }
  }
  getKeys() {
    if (this.experiences.length > 1) {
      this.fieldOfExperience = Object.keys(this.experiences[1]);
      this.fieldOfExperience.splice(6, 1); //deleting _id
      this.fieldOfExperience.splice(0, 1); //deleting _id
      this.fieldOfExperience.splice(this.fieldOfExperience.length - 1, 1); //deleting _v
      // console.log(this.fieldOfExperience);
    }

  }
  edit(id: string) {
    const index = this.experiences.findIndex((exp: any) => exp._id === id);
    this.experienceForm.get('title')?.setValue(this.experiences[index].title);
    this.experienceForm.get('org')?.setValue(this.experiences[index].org);
    this.experienceForm.get('fromDate')?.setValue(this.experiences[index].fromDate);
    this.experienceForm.get('toDate')?.setValue(this.experiences[index].toDate);
    this.experienceForm.get('description')?.setValue(this.experiences[index].description);
    this.experienceForm.get('tools')?.setValue(this.experiences[index].tools);
    this.experienceForm.get('githubLink')?.setValue(this.experiences[index].githubLink);
    this.dataService.editExperience(id).subscribe((data) => {
      console.log(data);


      // Find the index of the experience with the matching id
      const index = this.experiences.findIndex((exp: any) => exp._id === id);

      // Only splice if the index is found
      if (index !== -1) {
        this.delete(id);
      }
    });
  }
  edit_edu(id: string) {
    const index=this.educations.findIndex((edu:any)=>edu._id===id);

    this.educationForm.get('college')?.setValue(this.educations[index].college);
    this.educationForm.get('department')?.setValue(this.educations[index].department);
    this.educationForm.get('fromDate')?.setValue(this.educations[index].fromDate);
    this.educationForm.get('toDate')?.setValue(this.educations[index].toDate);
    this.educationForm.get('university')?.setValue(this.educations[index].university);
    this.educationForm.get('degree')?.setValue(this.educations[index].degree);
    this.educationForm.get('CumulativeGrade')?.setValue(this.educations[index].CumulativeGrade);
    if(index!==-1){
      this.dataService.editEducation(id).subscribe((data)=>{
        this.delete_edu(id);
      })
    }

  }
  delete(id: string) {
    console.log(id);

    this.dataService.deleteExperience(id).subscribe((data) => {
      console.log(data);

      // Find the index of the experience with the matching id
      const index = this.experiences.findIndex((exp: any) => exp._id === id);

      // Only splice if the index is found
      if (index !== -1) {
        this.experiences.splice(index, 1);
      }
    });
  }
  delete_edu(id: string) {
    this.dataService.deleteEducation(id).subscribe((data) => {
      const index=this.educations.findIndex((edu:any)=>edu._id===id);

      if(index!==-1){
        this.educations.splice(index,1);
      }
    })
  }

  ngOnInit(): void {
    this.loadExperience();
    this.loadEducation();
    this.experienceForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      org: new FormControl(null, [Validators.required]),
      fromDate: new FormControl(null, [Validators.required]),
      toDate: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      tools: new FormControl(null, [Validators.required]),
      githubLink: new FormControl(null),
    })
    this.educationForm = new FormGroup({
      college: new FormControl(null, [Validators.required]),
      department: new FormControl(null, [Validators.required]),
      fromDate: new FormControl(null, [Validators.required]),
      toDate: new FormControl(null, [Validators.required]),
      university: new FormControl(null, [Validators.required]),
      degree: new FormControl(null, [Validators.required]),
      CumulativeGrade: new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    if (this.experienceForm.valid) {
      this.dataService.addExperience(this.experienceForm).subscribe((newExperience) => {
        // Assuming the API returns the newly added experience
        this.experiences.push(newExperience.experience);
        this.experienceForm.reset(); // Optional: reset the form after submission
      });
    }

  }
  onSubmit_edu() {
    // if(this.educationForm.valid){
      this.dataService.addEducation(this.educationForm).subscribe((newEducation) => {
        // Assuming the API returns the newly added education
        this.educations.push(newEducation.education);
        this.educationForm.reset(); // Optional: reset the form after submission
      })
    }
  // }
}
