import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public contactInfo = {
    title: "Contact Me ☎️",
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+91-9634018431",
    email_address: "sharthak31@gmail.com"
  };
  socialMediaLinks = {

    github: "https://github.com/sarthakgoenka",
    linkedin: "https://www.linkedin.com/in/sarthak-agrawal-a41aa3153/",
    gmail: "sharthak31@gmail.com",
    instagram : "https://www.instagram.com/sarthak_goenka/?hl=en",
    facebook: "https://www.facebook.com/sharthak.agrawal"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
