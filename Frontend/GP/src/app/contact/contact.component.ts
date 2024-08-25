import { Component } from '@angular/core';
import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public gmail="menamohamed0207@gmail.com";
  public github="mennamohamed0207";
  public linkedin="mennamohamed0207";
  public facebook="mennamohamed0207";
  public phone="01013222936";
  public resume="";
  constructor(private dataService: ExperienceService) {}

  ngOnInit(): void {
    this.dataService.getContacts().subscribe(
      (response) => {
        const data = response.data;
        // console.log(data);
        
        this.mapContactLinks(data);
      },
      (error) => {
        console.error('Error fetching contact data:', error);
      }
    );
  }

  private mapContactLinks(data: any): void {
    data.forEach((item: any) => {
      switch (item.name.toLowerCase()) {
        case 'phone':
          this.phone = item.link;
          break;
        case 'gmail':
          this.gmail = item.link;
          break;
        case 'github':
          this.github = item.link;
          break;
        case 'linkdedin':
          this.linkedin = item.link;
          break;
        case 'facebook':
          this.facebook = item.link;
          break;
        case 'resume':
          this.resume = item.link;
          break;
        default:
          break;
      }
    });
  }
}