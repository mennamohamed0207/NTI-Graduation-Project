import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  timeline :any;
  constructor(private dataService: ExperienceService,private router: Router) {}
  // constructor() {}

  reloadPage() {
    this.router.navigate([this.router.url])
      .then(() => {
        window.location.reload();
      });
  }

  // reloadPage() {
    
  //   window.location.reload();
  // }
  ngOnInit(): void {
    // this.reloadPage();
    this.dataService.getExperience().subscribe(
      (data) => {
      //  console.log(data.data);
       this.timeline = data.data
      }
    )
  }
}