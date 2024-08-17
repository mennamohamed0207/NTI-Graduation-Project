import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public number: string = '';
  public emailAddress: string = '';
  public github: string = '';
  public linkedin: string = '';
  public facebook: string = '';

  public contactInfo = {
    title: "Contact Me ☎️",
    subtitle: "Get in touch with me",
    number: '',
    email_address: '',
  };
  socialMediaLinks = {

    github: "https://github.com/sarthakgoenka",
    linkedin: "https://www.linkedin.com/in/sarthak-agrawal-a41aa3153/",
    gmail: "sharthak31@gmail.com",
    instagram : "https://www.instagram.com/sarthak_goenka/?hl=en",
    facebook: "https://www.facebook.com/sharthak.agrawal"
  };
  constructor(private dataService: ExperienceService) {}

  ngOnInit(): void {
    this.dataService.getContacts().subscribe((data) => {
      // this.mapContactLinks(data.data);
      console.log(data.data);
      
    })
  }

  // private mapContactLinks(data: any): void {
  //   data.forEach((item: any) => {
  //     switch (item.name.toLowerCase()) {
  //       case 'phone':
  //         this.number = item.link;
  //         this.contactInfo.number = this.number;
  //         break;
  //       case 'gmail':
  //         this.emailAddress = item.link;
  //         this.contactInfo.email_address = this.emailAddress;
  //         break;
  //       case 'github':
  //         this.github = item.link;
  //         break;
  //       case 'linkedin':
  //         this.linkedin = item.link;
  //         break;
  //       case 'facebook':
  //         this.facebook = item.link;
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  // }
}
