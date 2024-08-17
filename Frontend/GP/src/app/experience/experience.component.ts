import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { ActivatedRoute, NavigationEnd, Route } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  timeline :any;
  constructor(private dataService: ExperienceService,private route: Router,private window:Location) {

    this.route.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
  }


  //   this.route.events.subscribe((evt) => {
  //      if (evt instanceof NavigationEnd) {
  //         // trick the Router into believing it's last link wasn't previously loaded
  //         this.route.navigated = false;
  //         // if you need to scroll back to top, here is the right place
  //         window.go('/experience');
  //      }
  //  });
}
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