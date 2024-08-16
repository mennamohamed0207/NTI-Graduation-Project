import { Component } from '@angular/core';
import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private dataService: ExperienceService) { }
  about :string = ""
  ngOnInit(): void {
    this.dataService.getAbout().subscribe(
      (data) => {
       console.log(data.data[0].about);
       this.about =data.data[0].about;
      }
    )
  }
  greeting:{
    username: string,
    title: string,
    subTitle: string,
    paragragh: string,
    resumeLink: string}={
      username: "Menna Mohamed Abdelbaset",
      title: "Welcome, I'm Menna",
      subTitle: "A passionate Computer Engineer 👩‍💻",
      resumeLink: "https://drive.google.com/file/d/1wKpkFRLQBiBWQYFYoCnT--nDyHxKO7lC/view?usp=drive_link",
      paragragh:this.about
    };

}
