import { Component } from '@angular/core';
import {Apollo} from "apollo-angular";
import gql from 'graphql-tag';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects2 = [];
  projects3 = [
    {
      link: "https://github.com/sarthakgoenka/portfolio",
    },
    {
      link: "",
    },
    {
      link: "https://natours-8aa57.web.app/",
    },
    {
      link:""
    },
    {

      link: "http://node-room-chat.herokuapp.com/",
    },
    {
      link: "https://personal-doc.herokuapp.com/",

    }
  ]
  constructor(public apollo: Apollo) { }

  ngOnInit(): void {


   
     
   
  }
}
