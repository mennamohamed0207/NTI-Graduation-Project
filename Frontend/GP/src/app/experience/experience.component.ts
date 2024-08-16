import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  timeline :any;
  // [
    // {
    //   heading: "Infosys",
    //   duration: "Present",
    //   subtitle: "",
    //   content: "Upcoming Full stack develover at Infosys!",
    //   className1: "mar-left",
    //   className2: "prt_about_learnbox_right"
    // },
    // {
    //   heading: "B.Tech - Computer Science & Engineering",
    //   duration: "2020",
    //   subtitle: "GLA University, Mathura",
    //   content: "Successfully completed my B.tech in Computer science from GLA University, Mathura.",
    //   className1: "mar-right",
    //   className2: "prt_about_learnbox_left"
    // },
    // {
    //   heading: "Higher Secondary(12th)",
    //   duration: "2016",
    //   subtitle: "CBSE Board",
    //   content: "Successfully completed my intermediate studies in 2016 from Gyan Deep Sr. Secondary Public School, Shikohabad.\n" +
    //     "Major: PCM.",
    //   className1: "mar-left",
    //   className2: "prt_about_learnbox_right"
    // }
    // {
    //   heading: "Secondary Stage(10th)",
    //   duration: "2014",
    //   subtitle: "CBSE Board",
    //   content: "Successfully completed my high school studies in 2014 from Georgions Academy, Shikohabad.",
    //   className1: "mar-right",
    //   className2: "prt_about_learnbox_left"
    // }
  //   {
  //     "title":"Backend Trainee",
  //     "org":"Cargas",
  //     "fromDate":"Jul.2023",
  //     "toDate":"Aug.2023",
  //     "description":["Contributed to the HR system website, enhancing employee experience with hotel reservations, unit resorts, coupons, and financial requests.",
  //     "Implemented user management, advanced payment for schools, and resort modules."],
  //     "githubLink":"https://github.com/mennamohamed0207/CarGas",
  //     "tools":["Laravel"," MySQL"]
  // }
  //   ];
  constructor(private dataService: ExperienceService) { }

  ngOnInit(): void {
    this.dataService.getExperience().subscribe(
      (data) => {
       console.log(data.data);
       this.timeline = data.data
      }
    )
  }
}