import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-card',
  templateUrl: './github-card.component.html',
  styleUrl: './github-card.component.css'
})
export class GithubCardComponent implements OnInit {

constructor() { }

ngOnInit(): void {
}

onCardClick(){
  // let win = window.open(this.github.node.url, "_blank");
  // win!.focus();
}

}
